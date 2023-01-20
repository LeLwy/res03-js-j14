import { User } from './classes/User.js'
import { Book } from './classes/Book.js'

window.addEventListener("DOMContentLoaded", function(){
    
    let users = [];
    let books = [];
    
    let user1 = new User(1, "Lwy","user1@user.mail","123456","Louis" ,"Chancioux", "https://www.ligue2.fr/-/media/Project/LFP/Ligue2/Images/Articles-Assests/2021/09/21/2109-2122-L2-Arbitre-Varela-1.jpg");
    let user2 = new User(2, "Valmonzo","user2@user.mail","123456","Valmont" ,"Pehaut", "https://i.pinimg.com/280x280_RS/ab/dc/be/abdcbeefd1e238123ce569de11b49b28.jpg");
    let user3 = new User(3, "Vicous","user3@user.mail","123456","Victor", "Oustiakine", "https://i.ytimg.com/vi/EKnp0zuWguc/maxresdefault.jpg");
    
    let book1 = new Book(1,"First Book","First Author","01/01/2001",501,"Il était une première fois, dans un premier royaume ...","https://petitsobjetsdecompagnie1.files.wordpress.com/2016/10/001.jpg");
    let book2 = new Book(2,"Second Book","Second Author","02/01/2001",601,"Il était une seconde fois, dans un second royaume ...","https://i.pinimg.com/236x/2b/11/ae/2b11aea3f6e1bcc87bab5c3393a1d6a3--altered-books-altered-art.jpg");
    let book3 = new Book(3,"Third Book","Third Author","03/01/2001",401,"Il était une troisième fois, dans un troisième royaume ...","https://i.etsystatic.com/21690701/r/il/152e55/2935881858/il_fullxfull.2935881858_aprp.jpg");
    
    users.push(user1);
    users.push(user2);
    users.push(user3);
    
    books.push(book1);
    books.push(book2);
    books.push(book3);
    
    let jsonUsers = JSON.stringify(users);
    let jsonBooks = JSON.stringify(books);
    
    sessionStorage.setItem("jsonUsersStored", jsonUsers);
    sessionStorage.setItem("jsonBooksStored", jsonBooks);
    
    let newBooksArray = JSON.parse(sessionStorage.getItem("jsonBooksStored"));
    
    for(let i=0; i<newBooksArray.length; i++){
        
        let bookParsed = JSON.parse(newBooksArray[i]);
        
        let book = new Book(bookParsed.id, bookParsed.title, bookParsed.author, bookParsed.publicationDate, bookParsed.totalPages, bookParsed.excerpt, bookParsed.coverImage);
        
        console.log(book);
    }
    
    let newUsersArray = JSON.parse(sessionStorage.getItem("jsonUsersStored"));
    
    for(let i=0; i<newUsersArray.length; i++){
        
        let userParsed = JSON.parse(newUsersArray[i]);
        
        let user = new User(userParsed.id, userParsed.username, userParsed.email, userParsed.password, userParsed.firstName, userParsed.lastName, userParsed.profileImage);
        
        console.log(user);
    }
});