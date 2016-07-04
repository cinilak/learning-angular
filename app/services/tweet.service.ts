export class TweetService {
	getTweets() {
		return [
            {
                imageUrl: "http://lorempixel.com/100/100/people?1", 
                username: "Windward", 
                twitterHandle: "@flying", 
                tweetContent: "Lorem Ipsum",
                numberOfLikes: 3,
                isLiked: true
            }, 
            {
                imageUrl: "http://lorempixel.com/100/100/people?2", 
                username: "Rambo", 
                twitterHandle: "@blabla",
                tweetContent: "Lorem  Bibsum",
                numberOfLikes: 1,
                isLiked: false                
            }, 
            {
                imageUrl: "http://lorempixel.com/100/100/people?3", 
                username: "Tarzan", 
                twitterHandle: "@fufu", 
                tweetContent: "Lorem flIpsum",
                numberOfLikes: 3,
                isLiked: true                
            }];
	}
}