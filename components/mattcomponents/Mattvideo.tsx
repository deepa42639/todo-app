// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Play,
//   Pause,
//   Volume,
//   ChevronLeft,
//   ChevronRight,
//   VolumeX,
//   ThumbsUp,
//   MessageSquareMore,
//   X,
//   SendHorizontal,
//   FilePenLine,
//   Trash2,
// } from "lucide-react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";



// import { SubmitHandler, useForm } from "react-hook-form";
// import z from "zod";


// import { cn } from "@/lib/utils";
// import useActiveUser from "./hooks/useActiveUser";
// import { useMattFetch } from "./MattFetch";
// import IsLoading from "./Isloading";
// import MattForm, { MattTextField, MattSubmit } from "./MattForm";
// import SubmitInput from "./TinyForm";
// const VideoPlayer: React.FC<VideoPlayerProps> = ({ videos }) => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [duration, setDuration] = useState(0);
//   const [isMuted, setIsMuted] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [startTime, setStartTime] = useState<number>(0);

//   const [activePostIndex, SetActivePostIndex] = useState<number>(0);
//   const [activePostValue, SetactivePostValue] = useState<string>("");
//   const [isPostediting, SetIsPostediting] = useState(false);

//   const { userData } = useActiveUser();
//   const { create } = useMattFetch();
//   const qc = useQueryClient();
//   useEffect(() => {
//     // const selectedPostMessage = videos[currentVideoIndex].comments[activePostIndex].Message
//     // SetactivePostValue(selectedPostMessage)
//   }, [activePostIndex]);

//   const CommentSchema = z.object({
//     message: z.string().min(1, "Required"),
//     userId: z.string().min(1, "Required"),
//     commentId: z.number().min(1, "Required"),
//   });

//   type CommentFormType = Zod.infer<typeof CommentSchema>;
//   const CommentFormMethods = useForm<CommentFormType>({
//     defaultValues: {
//       message: "",
//     },
//   });

//   const onCommentSubmit: SubmitHandler<CommentFormType> = (data) => {


//     CommentFormMethods.setValue("userId",userData?.id as string)
//     const UpdatedData = CommentFormMethods.getValues()
//     editPost.mutateAsync(UpdatedData).then( async()=>{

//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     }).catch((error)=>{


//     })
//   };

//   const handleCommentSubmit = async () => {
//     const IsFormValid = await CommentFormMethods.trigger();

//     if (IsFormValid) {
//       CommentFormMethods.handleSubmit(onCommentSubmit)();
//     }
//   };

//   const FormSchema = z.object({
//     message: z.string().min(1, "required"),

//     videoId: z.number().min(1, "required"),
//     userId: z.string().min(1, "required"),
//   });

//   type FormType = Zod.infer<typeof FormSchema>;
//   const FormMethod = useForm<FormType>({
//     defaultValues: {
//       message: "",
//     },
//   });

 
//   const DeleteAComment = useMutation({
//     mutationKey: ["DeleteAComment"],
//     mutationFn: async (data: {commentId:number,userId:string}) => {
      
//       return await create("/api/deleteComment",data)

//     },
//     onSuccess: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
    
   
//     },
//     onSettled: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     },

//     onError: async(error) => {
//       console.log(error);
//       alert("Delete failed failed, please try adain");
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     },
//   });

//   const PostAComment = useMutation({
//     mutationKey: ["PostComment"],
//     mutationFn: async (data: FormType) => {
//       return await create("/api/postAcomment", data);
//     },
//     onSuccess: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//       FormMethod.reset();
//     },
//     onSettled: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     },

//     onError: (error) => {
//       console.log(error);
//       alert("post failed, please try adain");
//     },
//   });
//   const updateLike = useMutation({
//     mutationKey: ["increment"],
//     mutationFn: async ({ videoId }: { videoId: string }) => {
//       return await create("/api/incrementLikes", { videoId });
//     },
//     onSuccess: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     },
//     onSettled: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     },
//     onError: (error) => {
//       console.log(error);
//       alert("Failed - Please like again");
//     },
//   });

//   const editPost = useMutation({
//     mutationKey: ["editPost"],
//     mutationFn: async (data: CommentFormType ) => {
//       return await create("/api/editYourComment",  data );
//     },
//     onSuccess: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//       SetIsPostediting(false)
//     },
//     onSettled: async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     },
//     onError: (error) => {
   
//     },
//   });

//   const OnSubmit: SubmitHandler<FormType> = async (data) => {
//     // Set videoId and userId before mutating
//     FormMethod.setValue("videoId", videos[currentVideoIndex].VideoId);
//     FormMethod.setValue("userId", userData?.id as string);

//     // Retrieve updated data after setting values
//     const updatedData = FormMethod.getValues();

//     // Call the mutation with the updated data
//     await PostAComment.mutateAsync(updatedData).finally(async () => {
//       await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
//     });
//   };

//   useEffect(() => {
//     videoRef.current?.play();
//     setIsPlaying(true);
//   }, [currentVideoIndex]);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current?.pause();
//     } else {
//       videoRef.current?.play();
//       setStartTime(0);
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleNext = () => {
//     incrementTime();

//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//     );
//     setIsPlaying(false);
//   };

//   const handlePrev = () => {
//     incrementTime();
//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === 0 ? videos.length - 1 : prevIndex - 1
//     );
//     setIsPlaying(false);
//   };

//   const handleVideoTimeUpdate = () => {
//     const currentTime = videoRef.current?.currentTime || 0;
//     const duration = videoRef.current?.duration || 1;
//     setProgress((currentTime / duration) * 100);
//   };

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const seekTime =
//       (Number(e.target.value) / 100) * (videoRef.current?.duration || 0);
//     videoRef.current!.currentTime = seekTime;
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       // Start the timer
//       const newTimer = setInterval(() => {
//         setStartTime((prevSeconds) => prevSeconds + 1);
//       }, 1000);

//       // Clean up the timer when component unmounts or isPlaying changes
//       return () => {
//         if (newTimer) {
//           clearInterval(newTimer);
//         }
//       };
//     } else {
//       incrementTime();
//     }
//   }, [isPlaying]);

//   const incrementTime = () => {
//     create("/api/addTime", {
//       videoId: videos[currentVideoIndex].VideoId.toString(),
//       watchTime: startTime,
//     }).then((val) => setStartTime(0));
//   };

//   // useUnsavedChanges(true, "zikhona now", incrementTime);
//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newVolume = Number(e.target.value);
//     videoRef.current!.volume = newVolume;
//     setVolume(newVolume);
//     setIsMuted(newVolume === 0);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//     videoRef.current!.muted = !isMuted;
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(videoRef.current?.duration || 0);
//   };

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   if (!videos || videos.length === 0) {
//     return (
//       <div className="CENTER flex-col items-center justify-center w-full h-fit">
//         <p className="text-lg font-semibold">No videos available to play.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative CENTER !flex-col !items-start gap-4 w-full  h-fit">
//       <div className="relative flex space-x-6">
//         <div className="relative flex flex-col gap-3 justify-start items-start">
//           <div
//             className="relative"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <video
//               ref={videoRef}
//               className="h-[500px] rounded-lg object-cover"
//               src={videos[currentVideoIndex].videoUrl}
//               poster={videos[currentVideoIndex].thumbnail}
//               onEnded={handleNext}
//               onTimeUpdate={handleVideoTimeUpdate}
//               onLoadedMetadata={handleLoadedMetadata}
//               controls={false}
//             />

//             {isHovered && (
//               <div className="absolute inset-0 flex items-center justify-between p-4">
//                 <div className="duration-500 flex justify-between items-center absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-40 text-white">
//                   <div className="flex justify-between items-center mb-2">
//                     <div className="flex items-center">
//                       <span>
//                         {formatTime(videoRef.current?.currentTime || 0)}
//                       </span>
//                       <input
//                         type="range"
//                         className="w-full mx-2"
//                         value={progress}
//                         onChange={handleSeek}
//                       />
//                       <span>{formatTime(duration)}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <button className="text-white p-2" onClick={handlePrev}>
//                       <ChevronLeft className="w-8 h-8" />
//                     </button>
//                     <button
//                       className="text-white p-2"
//                       onClick={togglePlayPause}
//                     >
//                       {isPlaying ? (
//                         <Pause className="w-8 h-8" />
//                       ) : (
//                         <Play className="w-8 h-8" />
//                       )}
//                     </button>
//                     <div className="flex items-center space-x-2">
//                       <button onClick={toggleMute}>
//                         {isMuted ? (
//                           <VolumeX className="w-8 h-8 text-white" />
//                         ) : (
//                           <Volume className="w-8 h-8 text-white" />
//                         )}
//                       </button>
//                       <input
//                         type="range"
//                         className="w-24"
//                         min="0"
//                         max="1"
//                         step="0.01"
//                         value={volume}
//                         onChange={handleVolumeChange}
//                       />
//                     </div>
//                     <button className="text-white p-2" onClick={handleNext}>
//                       <ChevronRight className="w-8 h-8" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex justify-between items-center w-full px-6">
//             <div className="flex items-center mt-2">
//               <img
//                 src={videos[currentVideoIndex].users.ImgUrl}
//                 alt={videos[currentVideoIndex].Name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="ml-2 flex flex-col">
//                 <p className="text-sm font-medium">
//                   {videos[currentVideoIndex].users.Name}
//                 </p>

//                 <IsLoading size={6} isLoading={updateLike.isPending}>
//                   <div className="flex items-center gap-1">
//                     <ThumbsUp
//                       size={20}
//                       className="hover:text-red-500 hover:cursor-pointer"
//                       onClick={() => {
//                         updateLike.mutate({
//                           videoId: videos[currentVideoIndex].VideoId.toString(),
//                         });
//                       }}
//                     />
//                     <p className="text-xs text-gray-600">
//                       {videos[currentVideoIndex].Likes} likes
//                     </p>
//                   </div>
//                 </IsLoading>
//               </div>
//             </div>

//             <h2 className="text-xl font-semibold">
//               {videos[currentVideoIndex].Name}
//             </h2>

//             <p className="mt-2 text-sm">
//               {videos[currentVideoIndex].Description}
//             </p>
//           </div>
//         </div>

//         <div className="w-64">
//           <h3 className="text-xl font-semibold mb-4">Up Next</h3>
//           {videos.map((video, index) => (
//             <div
//               key={index}
//               className={`flex mb-4 cursor-pointer ${
//                 currentVideoIndex === index ? "bg-gray-200" : ""
//               }`}
//               onClick={() => setCurrentVideoIndex(index)}
//             >
//               <img
//                 src={video.thumbnail}
//                 alt={video.Name}
//                 className="w-24 h-14 rounded-lg"
//               />
//               <div className="ml-4">
//                 <h4 className="text-sm font-medium">{video.Name}</h4>
//                 <p className="text-xs text-gray-500">{video.Name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="px-8 w-full">
//         <div className=" CENTER !justify-start gap-4 ">
//           <MessageSquareMore />
//           <p className=" font-bold">
//             {videos[currentVideoIndex].comments.length}
//           </p>
//           <h1 className="py-6 font-bold ">Comments</h1>
//         </div>
//         <div className=" w-full h-fit ">
//           <MattForm
//             className="w-full h-[90px] mb-4"
//             Methods={FormMethod}
//             GetFormData={OnSubmit}
//           >
//             <div className=" CENTER !flex-col gap-1 w-full ">
//               <div className=" relative CENTER w-full gap-2">
//                 <div className=" CENTER !flex-col gap-1 w-full">
//                   <MattTextField name="message" label="Your comment" />
//                   {PostAComment.error ? (
//                     <p className=" absolute top-[2px] left-0 ml-[130px]  text-red-500 text-[10px]">
//                       Please resend you post
//                     </p>
//                   ) : null}
//                 </div>

//                 <IsLoading
//                   className="w-[90px] CENTER"
//                   size={4}
//                   isLoading={PostAComment.isPending}
//                 >
//                   <MattSubmit className=" !w-[60px]  mt-[23px]">
//                     <SendHorizontal size={15} className=" text-white" />
//                   </MattSubmit>
//                 </IsLoading>
//               </div>
//             </div>
//           </MattForm>
//           <div className="relative bg-slate-50 h-fit w-full CENTER !flex-col px-20 pt-12 gap-10">
//             {videos[currentVideoIndex].comments.map((comments, index) => {

              
//              return (
//               <div
//               key={comments.CommentId}
//               className=" CENTER  w-full !justify-start "
//             >
//               {(
//                 <div className={cn(" ml-4  CENTER  w-full !justify-between ",index % 2 >0?" ml-12":"")}>
//                   <div className=" CENTER gap-3">
//                     <img
//                       src={comments.users.ImgUrl}
//                       alt={videos[currentVideoIndex].Name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div className="ml-2 flex flex-col ">
//                       <p className="text-sm font-medium">
//                         {comments.users.Name}
//                       </p>

//                       <p className=" text-xs mt-2 ml-4 h-auto  truncate w-full ">
//                         {" "}
//                         {comments.Message}
//                       </p>
//                     </div>
//                   </div>

//                   <div className=" CENTER gap-4">
//                     {isPostediting && index === activePostIndex && (
//                       <MattForm
//                         className="w-[400px]  h-[70px] "
//                         Methods={CommentFormMethods}
//                         GetFormData={onCommentSubmit}
//                       >
                    
//                     <IsLoading
               
//                   size={4}
//                   isLoading={editPost.isPending}
//                 >
//                         <SubmitInput onError={{isError:editPost.error?true:false,message:"This is not your post"}}
//                           name="message"
//                           SubmitFn={() => {
//                             handleCommentSubmit();
//                           }}
//                         />
//                         </IsLoading>
//                       </MattForm>
//                     )}

//                     {isPostediting && index === activePostIndex ? (
//                       <X
//                         className=" hover:text-orange-600 hover:cursor-pointer"
//                         onClick={() => {
//                           editPost.reset()
//                           SetIsPostediting((prev) => !prev);
                       
//                         }}
//                       />
//                     ) : userData?.UserId===comments.UserId?(
//                       <FilePenLine
//                       onClick={() => {
//                         SetActivePostIndex(index);

//                         CommentFormMethods.setValue("commentId", videos[currentVideoIndex].comments[index].CommentId)
//                         const selectedPostMessage =
//                           videos[currentVideoIndex].comments[index].Message;
//                         SetIsPostediting(true);

//                         CommentFormMethods.setValue(
//                           "message",
//                           selectedPostMessage
//                         );

//                         CommentFormMethods.clearErrors()
//                       }}
//                       size={20}
//                       className=" hover:text-orange-600 hover:cursor-pointer"
//                     />
//                     ):<IsLoading size={4} isLoading={index === activePostIndex?DeleteAComment.isPending:false}>

// <Trash2 className="text-red-400 hover:text-red-600 hover:cursor-pointer"    size={20} onClick={async()=>{

                   

// DeleteAComment.mutateAsync({commentId:videos[currentVideoIndex].comments[index].CommentId,userId:videos[currentVideoIndex].users.UserId}).then(async()=>{


//   await qc.invalidateQueries({ queryKey: ["getAllVideos"] });

// }).finally(async()=>{

//   await qc.invalidateQueries({ queryKey: ["getAllVideos"] });
// })
                  
//                     }} />
//                     </IsLoading>
                    
                    
//                     }
//                   </div>
//                 </div>
//               )}
//             </div>
//              )
// })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
