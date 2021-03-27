import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tech-page',
  templateUrl: './tech-page.component.html',
  styleUrls: ['./tech-page.component.css']
})
export class TechPageComponent implements OnInit {

  postsArray: any = []
  
  arr: any[] = [] 

  constructor(private http: HttpClient) {
    this.http.get('https://rrt-app-database-default-rtdb.firebaseio.com/tech.json')
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
    this.arr.push(["What online resources do you use to help you do your job?","Most IT workers turn to websites such as StackExchange or Github when they need help with something. Serious professionals will have their own selection of websites, online communities, social media feeds and other resources specific to their interests. The answer to this question will give you an indication of how engaged the candidate is with the broader IT world"])
    this.arr.push(["What are your favorite and least favorite technology products, and why?","In addition to learning whether prospective employees like the hardware, operating system and software your company uses, this tech interview question helps you evaluate enthusiasm and knowledge. Do candidates become animated when discussing the advantages and disadvantages of certain tools? Do they admire solid engineering, sleek design, intuitive user experience or another aspect of good technology?"])
    this.arr.push(["How do you think further technology advances will impact your job?","Advances in technologies continue to change most IT roles. How aware of that is the candidate you’re interviewing? Do they know, for example, that automated testing is a major part of DevOps, which allows for faster development cycles and quicker deployment? A candidate may talk about the automation tools they use or the challenges of working with machine learning and big data. They may also discuss AI projects they hope to work on"])
    this.arr.push(["Why do you want to work for us?","Individuals who truly want the job will have done their research and be able to talk about your company’s values, products and services, and approach to technology. If they can’t articulate at least a few reasons your company would be a good match for their skills and ambitions, then they haven’t done their due diligence to properly prepare for the interview."])
    this.arr.push(["Tell me about a tech project you’ve worked on in your spare time.","You want to hire an IT professional who devotes their personal time to side projects. Why? These are people who are driven and curious, which, in turn, keeps their skill set fresh. Ask how they stay motivated, what interests them about the project and what their ultimate goal is. If they can demo a website or app they’ve built, all the better."])
    this.arr.push(["What skills or characteristics make someone an effective remote worker?","This is an important question to ask given the ongoing impact of the COVID-19 pandemic. Remote workers must be self-starters who are able to work with little supervision. They need excellent communication abilities as well as self-discipline and stellar time-management skills. Not everyone has those qualities, and not everyone thrives working outside an office."])
    this.arr.push(["Can you tell us something about your working experience?","If you had just one job in the past, and it was completely irrelevant to the one you try to get, you can at least say that the experience helped you to gain basic working habits. Typical job interview is a competitive affair. Corporate jobs with good salaries attract dozens or hundreds of applications. In order to succeed, you have to stand out. The answer I show you here everyone can see–and they are definitely good for a start."])
    this.arr.push(["What are your salary expectations?","It means that they consider hiring you (unless they just blindly follow an interview template, and ask every job candidate exactly the same questions). Anyway, you should say that your salary is not a deciding factor, and that you didn’t apply having a number on your mind. If they insist on hearing a number, however, you should have something to backup your claim"])
  }


  ngOnInit(): void {
  }

}
