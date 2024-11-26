type ChildClass = {
    children: React.ReactNode;
    className?: string;
  };
  
 
  
  type UploadedImageProps = {
    className?: string;
  };
  
  
  type MattImageFileProps={
    name: string;
    label?: string;
    className?: string;
    trigger?: (videoName: string | null) => React.ReactNode;
    readOnly?:boolean
  
  }
  
  type MattVideoFileProps={
    name: string;
    label?: string;
    className?: string;
    trigger?: (videoName: string | null) => React.ReactNode;
  
  }
  
  type MattFileFileProps = {
    name: string;
    label: string;
    className?: string;
    trigger?: (videoName: string | null) => React.ReactNode;
  };


  type ActiveUser={
    id:string |null,
    name: string | null,
    email:string | null,  
    role:string | null ,
    image:string | null,
    emailVerified:boolean  | null  
  }

  type responseData<T> = T; // Define responseData as generic

  type VideoType = {
    VideoId: number,
    Name: string,
    Description: string,
    Category: string,
    IsMonetised: boolean,
    WatchTime: string,
    Likes: string,
    UserId: string,
    videoUrl: string,
    thumbnail:string,
    CreatedAt:string,
    users: { 
        
          Name: string,
          ImgUrl:string,
          UserId:string
      
    },
    comments: { // Include comments and the related user data for each comment
   
        CommentId: number,
        Message: string,
        UserId:trstringue,
        users: {
        
            Name: string,
            ImgUrl: string,
       
        }
    
    }[],
  }






  type VideoPlayerProps = {
    videos: VideoType[];
  };