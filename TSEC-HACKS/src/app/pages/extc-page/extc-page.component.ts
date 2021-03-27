import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-extc-page',
  templateUrl: './extc-page.component.html',
  styleUrls: ['./extc-page.component.css']
})
export class ExtcPageComponent implements OnInit {

  postsArray: any = []
  
  arr: any[] = [] 

  constructor(private http: HttpClient) {
    this.http.get('https://rrt-app-database-default-rtdb.firebaseio.com/extc.json')
    .pipe(map(
      (responseData: any) => {
        for (const i in responseData){
            if(responseData.hasOwnProperty(i)) {
              this.postsArray.push({...responseData[i]})
            }
        }
      }
    ))
    .subscribe(
      posts => console.log(posts)
    )
    console.log(this.postsArray);
    this.arr.push(["What Is Op­-amp?","An operational amplifier, often called an op­-amp , is a DCcoupled high ­gain electronic voltage amplifier with differential inputs and, usually, a single output. Typically the output of the op­amp is controlled either by negative feedback, which largely determines the magnitude of its output voltage gain, or by positive feedback, which facilitates regenerative gain and oscillation."])
    this.arr.push([" What Is Crosstalk?","Crosstalk is a form of interference caused by signals in nearby conductors. The most common example is hearing an unwanted conversation on the telephone. Crosstalk can also occur in radios, televisions, networking equipment, and even electric guitars."])
    this.arr.push(["What Is A Transducer And Transponder?","A transducer is a device, usually electrical, electronic, electro­mechanical, electromagnetic, photonic, or photovoltaic that converts one type of energy or physical attribute to another for various purposes including measurement or information transfer. An automatic device that receives, amplifies, andretransmits a signal on a different frequency (see alsobroadcast translator). An automatic device that transmits a predetermined message in response to a predefined received signal. A receiver­transmitter that will generate a reply signal upon proper electronic interrogation. A communications satellite’s channels are called transponders, because each is a separate transceiver or repeater."])
    this.arr.push(["Explain Full Duplex And Half Duplex.","Full duplex refers to the transmission of data in two directions simultaneously. For example, a telephone is a full­duplex devicebecause both parties can talk at once. In contrast, a walkie­talkie is ahalf­duplex device because only one party can transmit at a time. Most modems have a switch that lets you choose between full­duplex and half­duplex modes. The choice depends on whichcommunications program you are running. In full­duplex mode, data you transmit does not appear on yourscreen until it has been received and sent back by the other party. This enables you to validate that the data has been accurately transmitted. If your display screen shows two of each character, it probably means that your modem is set to half­duplex mode when it should be in full­duplex mode."])
    this.arr.push(["What Is Barkhausen Criteria?","Barkhausen criteria, without which you will not know which conditions, are to be satisfied for oscillations. Oscillations will not be sustained if, at the oscillator frequency, the magnitude of the product of the transfer gain of the amplifier and the magnitude of the feedback factor of the feedback network ( the magnitude of the loop gain ) are less than unity. The condition of unity loop gain ­Aβ = 1 is called the Barkhausencriterion. This condition implies that | Aβ|= 1and that the phase of – Aβ is zero."])
    
    this.arr.push(["What Is Attenuation?","Attenuation is the reduction in amplitude and intensity of a signal. Signals may attenuate exponentially by transmission through a medium, or by increments calculated in electronic circuitry or set by variable controls. Attenuation is an important property in telecommunications and ultrasound applications because of its importance in determining signal strength as a function of distance. Attenuation is usually measured in units of decibels per unit length of medium (dB/cm, dB/km, etc) and is represented by the attenuation coefficient of the medium in question."])
    
    this.arr.push(["How Does A Mobile Work?","When you talk into a mobile telephone it converts the sound of your voice to radiofrequency energy (radio waves). The radio waves are transmitted through the air to a nearby base station. The base station then sends the call through the telephone network until it reaches the person you are calling. When you receive a call on your mobile phone the message travels through the telephone network until it reaches a base station near to you. The base station sends out radio waves, which are detected by your telephone and converted back to speech. Depending on the equipment and the operator, the frequency that each operator utilises is 900MHz, 1800MHz or 2100MHz."])
    
    this.arr.push(["Why you will make a good electrial engineering of our company?","I would like to think I am a safety-focused, results-driven, and professional electrical engineer who can be relied upon to carry out my tasks competently within strict rules and procedures in a fast and efficient manner. I say this because over the years I have developed lots of transferrable skills, qualities, and experience that make me highly effective as an electrical engineer. For example, in my previous role, my supervisor would often ask me to work on challenging electrical engineering projects that needed an analytical and data-driven approach to solving difficult problems. I understand there comes a huge amount of responsibility as an electrical engineer, and if you hire me within this position, I will work hard to repay the faith you will have shown in employing me."])
    }
    
  ngOnInit(): void {

  }



}
