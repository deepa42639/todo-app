import axios ,{AxiosResponse}from 'axios'




export const MattServerUploader = async <T> (endPoint:string,formData:FormData):Promise<T>=>{



  try{

    const response = await axios.post<T>(endPoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


    // Check if the response status is OK
    if (response.status === 200) {
  
   return response.data as T
    } else {
      return response.data as T
    }
  
  
 
  }catch(error){
    return error as T 
}
}



