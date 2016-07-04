
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'posts',
    styles: [`
        .posts {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .posts .posts-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .posts .posts-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .posts .posts-content {
            padding: 20px;
        }
    `],
    template: `
    <div class="posts">
        <div 
            class="posts-title"
            (click)="toggle()">
            {{ title }} 
            <i 
                class="pull-right glyphicon" 
                [ngClass]="
                    { 
                        'glyphicon-chevron-down': !isExpanded, 
                        'glyphicon-chevron-up': isExpanded 
                    }">
            </i>
        </div>
        <div *ngIf="isExpanded" class="posts-content">
            <ng-content></ng-content> 
        </div>
    </div>    
    `
})
export class PostsComponent {
    isExpanded = false;
    @Input() title: string;
        
    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}