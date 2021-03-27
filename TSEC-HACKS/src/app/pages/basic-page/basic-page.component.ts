import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {
  
  postsArray: any = []
  
  arr: any[] = [] 

  constructor(private http: HttpClient) {
    this.http.get('https://rrt-app-database-default-rtdb.firebaseio.com/basic.json')
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
    this.arr.push(["Tell Me About Yourself.","This is one of the first questions you are likely to be asked. Be prepared to talk about yourself, and why you're an ideal candidate for the position. The interviewer wants to know why you're an excellent fit for the job. Try to answer questions about yourself without giving too much, or too little, personal information. You can start by sharing some of your personal interests and experiences that don't relate directly to work, such as a favorite hobby or a brief account of where you grew up, your education, and what motivates you."])
    this.arr.push(["Why Do You Want This Job?","Why are you a good fit for the position? What would you accomplish if you were hired? This interview question gives you an opportunity to show the interviewer what you know about the job and the company, so take time beforehand to thoroughly research the company, its products, services, culture, and mission. Be specific about what makes you a good fit for this role, and mention aspects of the company and position that appeal to you most."])
    this.arr.push(["Why Should We Hire You?","Are you the best candidate for the job? The hiring manager wants to know whether you have all the required qualifications. Be prepared to explain why you're the applicant who should be hired. Make your response a confident, concise, focused sales pitch that explains what you have to offer and why you should get the job. This is a good time to review the qualifications and the requirements in the job listing, so you can craft a response that aligns with what the interviewer is looking for."])
    this.arr.push(["What Is Your Greatest Strength?","This is one of the questions that employers almost always ask to determine how well you are qualified for the position. When you are asked about your greatest strengths, it's important to discuss the attributes that qualify you for that specific job, and that will set you apart from other candidates. When you're answering this question, remember to “show” rather than “tell.” For example, rather than stating that you are an excellent problem solver, instead tell a story that demonstrates this, ideally drawing on an anecdote from your professional experience."])
  }


  ngOnInit(): void {
  }
    

}
