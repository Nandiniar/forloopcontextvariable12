import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forloopcontextvariable12';
  //contextual variables are those variables jo for loop ke andar avaibale hote hai like ke @for(statement){
  //
  //}    isme curly braces ke andar wale varibales contextual variable honge and yeh khud bane hote hai hume khud define karne ke need nhi hote
  // contextual variables are $count,$index,$last,$first,$odd,$even
  users=['anil','sam','peter','ram','rohan','raj','mohan','sumit']
  usev=[]
}
