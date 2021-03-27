import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mech-page',
  templateUrl: './mech-page.component.html',
  styleUrls: ['./mech-page.component.css']
})
export class MechPageComponent implements OnInit {

  postsArray: any = []
  
  arr: any[] = [] 

  constructor(private http: HttpClient) {
    this.http.get('https://rrt-app-database-default-rtdb.firebaseio.com/mech.json')
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
  }


  ngOnInit(): void {
  }

}
