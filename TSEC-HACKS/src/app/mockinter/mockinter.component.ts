import { Component, OnInit } from '@angular/core';
declare var MediaRecorder: any;
function CallJavaScriptRecording() {
let mediaRecorder: any;
let recordedBlobs: any;

const errorMsgElement :any= document.querySelector('span#errorMsg');
const recordedVideo :any =  document.querySelector('video#recorded');
const recordButton :any= document.querySelector('button#record');
const playButton :any= document.querySelector('button#play');
const downloadButton :any= document.querySelector('button#download');


recordButton.addEventListener('click', () => {
  if (recordButton.textContent === 'Record') {
    startRecording();
  } else {
    stopRecording();
    recordButton.textContent = 'Record';
    playButton.disabled = false;
    downloadButton.disabled = false;
  }
});


playButton.addEventListener('click', () => {
  const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
  recordedVideo.src = null;
  recordedVideo.srcObject = null;
  recordedVideo.src = window.URL.createObjectURL(superBuffer);
  recordedVideo.controls = true;
  recordedVideo.play();
});


downloadButton.addEventListener('click', () => {
  const blob = new Blob(recordedBlobs, {type: 'video/mp4'});
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'interview.mp4';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    (window as any).URL.revokeObjectURL(url);
  }, 100);
});

function handleDataAvailable(event: any) {
  console.log('handleDataAvailable', event);
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

function startRecording() {
  recordedBlobs = [];
  let options = {mimeType: 'video/webm;codecs=vp9,opus'};
  try {
    mediaRecorder = new MediaRecorder((window as any).stream , options);
  } catch (e) {
    console.error('Exception while creating MediaRecorder:', e);
    errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
    return;
  }

  console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
  recordButton.textContent = 'Stop Recording';
  playButton.disabled = true;
  downloadButton.disabled = true;
  mediaRecorder.onstop = (event: any) => {
    console.log('Recorder stopped: ', event);
    console.log('Recorded Blobs: ', recordedBlobs);
  };
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();
  console.log('MediaRecorder started', mediaRecorder);
}

function stopRecording() {
  mediaRecorder.stop();
}

function handleSuccess(stream: any) {
  recordButton.disabled = false;
  console.log('getUserMedia() got stream:', stream);
  (window as any).stream = stream;

  const gumVideo = document.querySelector('video#gum');
  (gumVideo as any).srcObject = stream;
}

async function init(constraints: any) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    console.error('navigator.getUserMedia error:', e);
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
}

(document.querySelector('button#start') as any).addEventListener('click', async () => {
  const hasEchoCancellation = (document.querySelector('#echoCancellation') as any).checked;
  const constraints = {
    audio: {
      echoCancellation: {exact: hasEchoCancellation}
    },
    video: {
      width: 1280, height: 720
    }
  };
  console.log('Using media constraints:', constraints);
  await init(constraints);
});
}
@Component({
  selector: 'app-mockinter',
  templateUrl: './mockinter.component.html',
  styleUrls: ['./mockinter.component.css']
})
export class MockinterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    CallJavaScriptRecording();
  }

}
