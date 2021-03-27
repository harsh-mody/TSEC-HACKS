import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-infotech-page',
  templateUrl: './infotech-page.component.html',
  styleUrls: ['./infotech-page.component.css']
})
export class InfotechPageComponent implements OnInit {

  postsArray: any = []
  
  arr: any[] = [] 

  constructor(private http: HttpClient) {
    this.http.get('https://rrt-app-database-default-rtdb.firebaseio.com/it.json')
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
    this.arr.push(["What challenges do you expect in this IT support job role?","The answer determines if you’re a person who looks for challenges and if you a perfect fit for the position. You can answer that you would make use of your skills and experience in the right manner in case you hired. Also, answer that you’re a person who boosted by challenges and can face challenges. You also can mention that you possess the skills and flexibility to handle any challenging chore."])
    this.arr.push(["What is your typical workweek as an IT support officer?","The employers would like to know what the candidate would do while they work. Take a deep look at the job role you have applied for and how it relates to your previous role. When you wanted to talk about typical work for a week, avoid discussing non-work related activities. During the time of the company, you should productively use the time. Your answers must focus on work and formulate your answers in a way that presents that you organized."])
    this.arr.push(["Which operating system are you famed with?","Remember to answer this question by researching the systems the organization is using. Try to get familiar with the system the organization makes use of. This also mentions other systems that you have worked and have experience with."])
    this.arr.push(["What are the steps you follow to solve a technical problem?","This commonly asked IT support interview questions would present your familiarity with the IT support process. Your answer would also be a key that would enable the employer to schedule training if required. Remember to list down all the steps for solving in the right order and also answer that each organization has its own set of procedures."])
    this.arr.push(["What is ‘A’ record and what is ‘MX record’?","A record also knows as host record, and it maps the IP address by name in which you can find out the IP address of a name. While, MX record also knows as mail exchanger record, by the help of MX record, the location of the mail server identified. The record also found in DNS. These are a few common IT support interview questions and answers. Almost all answers should formulated in a positive tone and focusing on the clients and solving their issues. Candidates should be aware of basic technical knowledge and computer troubleshooting questions and answers. IT supports one highly demanded job and hence proper knowledge required to solve the questions in the interview."])
    this.arr.push(["What is BIOS?","BIOS is abbreviated as a basic input output system and present in all computers. The main purpose of the BIOS is that it ensures that all the components of the computer function together. All details regarding the hardware components in the system are contained in the BIOS. Special software is another name offered to BIOS as it interfaces the main hardware components of the system with the operating system. The flash memory chip on the motherboard is where it is stored."])
    this.arr.push(["Who do you believe are Google’s main competitors? How does Google stand apart?","With this question, the hiring manager can determine whether you have a solid idea of which other companies dominate spaces where Google also sits. This can be especially relevant in product-oriented roles, including everything from product manager positions to software developer jobs, where finding opportunities to outshine other companies comes with the territory."])
    this.arr.push(["Which sorting algorithm is the best?","There are many types of sorting algorithms: bubble sort, quick sort, balloon sort, merge sort, radix sort, and more. No algorithm can be considered as the best or fastest because they have designed each for a specific type of data structure where it performs the best."])
    this.arr.push(["What are dynamic data structures?","Dynamic data structures have the feature where they expand and contract as a program runs. It provides a very flexible method of data manipulation because adjusts based on the size of the data to be manipulated."])}


  ngOnInit(): void {
  }


}
