"use client";

import axios, { AxiosError, AxiosResponse } from "axios";



export const useMattFetch = () => {
  // Function to handle POST requests (Create)


  const create = async <T, D>(
    endPoint: string,
    data: T,
    useFetch?: boolean,
    progressPercentage?: React.Dispatch<React.SetStateAction<number>>
  ): Promise<responseData<D> | null> => {
    let results: responseData<D> | null = null;
  
    if (useFetch) {
      try {
        const response = await fetch(endPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        results = (await response.json()) as responseData<D>;
      } catch (error:any) {
       
        throw new Error(error.Message,error)
      }
    } else {
      try {
        const config: any = {};
  
        // Check if the data is an instance of FormData
        if (data instanceof FormData) {
          config.headers = {
            'Content-Type': 'multipart/form-data',
          };
        } else {
          // Default to JSON content type
          config.headers = {
            'Content-Type': 'application/json',
          };
        }
  
        if (progressPercentage) {
          config.onUploadProgress = (progressEvent: any) => {
            const total = progressEvent.total ?? 0; // Fallback to 0 if undefined
            const progress = total > 0 ? Math.round((progressEvent.loaded * 100) / total) : 0;
            progressPercentage(progress);
          };
        }
  
        const response: AxiosResponse<responseData<D>> = await axios.post(
          endPoint,
          data,
          config
        );
  
        results = response.data;
      } catch (error: any) {
        throw new Error(error.Message)
      }
    }
  
    return results;
  };
  



  // const create = async <T, D>(
  //   endPoint: string,
  //   data: T,
  //   useFetch?: boolean,
  //   progressPercentage?: React.Dispatch<React.SetStateAction<number>>
  // ): Promise<responseData<D> | null> => {
  //   let results: responseData<D> | null = null;
  
  //   if (useFetch) {
  //     try {
  //       const response = await fetch(endPoint, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       results = (await response.json()) as responseData<D>;
  //     } catch (error) {
  //       results = null; // Handle error if necessary
  //     }
  //   } else {
  //     try {
  //       const config:any = {};

    

  
  //       if (progressPercentage) {

  //         const onUploadProgress= (progressEvent:any) => {
  //           const total = progressEvent.total ?? 0; // Fallback to 0 if undefined
  //           const progress =
  //             total > 0 ? Math.round((progressEvent.loaded * 100) / total) : 0;
  //           progressPercentage(progress);
  //         }
  //         config.onUploadProgress = onUploadProgress;
  //       }

      
        
  
  //       const response: AxiosResponse<responseData<D>> = await axios.post(
  //         endPoint,
  //         data,
  //         config
  //       );
  
  //       results = response.data;
  //     } catch (error: any) {
  //       results = error.response ? error.response.data : null;
  //     }
  //   }
  
  //   return results;
  // };


  // const read = async <T, P = Record<string, unknown>>(
  //   endPoint: string,
  //   params?: P,
  //   useFetch = false
  // ): Promise<T> => {
  //   if (useFetch) {
  //     // Using fetch with optional parameters
  //     const queryString = new URLSearchParams(
  //       params as Record<string, string>
  //     ).toString(); 
  //     const response = await fetch(`${endPoint}?${queryString}`);
  //     return (await response.json()) as T;
  //   } else {
     

  //     return (await axios.get(endPoint,{params})).data
  //   }
  // };
  



const read = async <T, P = Record<string, unknown>>(
  endPoint: string,
  params?: P,
  useFetch = false
): Promise<T> => {
  if (useFetch) {
    // Using fetch with optional parameters
    const queryString = new URLSearchParams(
      params as Record<string, string>
    ).toString();
    const response = await fetch(`${endPoint}?${queryString}`);
    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`);
    }
    return (await response.json()) as T;
  } else {
    // Ensure params is either an object or undefined
    const axiosParams = typeof params === 'object' && params !== null ? params : undefined;
    const response = await axios.get<T>(endPoint, { params: axiosParams });
    return response.data;
  }
};


  const upload = async <T,>(
    endPoint: string,
    formData: T,
    progressPercentage: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return await axios.post(endPoint, formData, {
      onUploadProgress: (progressEvent) => {
        const total = progressEvent.total ?? 0; // Fallback to 0 if undefined
        const progress =
          total > 0 ? Math.round((progressEvent.loaded * 100) / total) : 0;
        progressPercentage(progress);
      },
    });
  };

  // Function to handle PUT requests (Update)
  const update = async <T,>(
    endPoint: string,
    data: T,
    useFetch?: boolean
  ): Promise<responseData<T> | null> => {
    let results: responseData<T> | null = null;

    if (useFetch) {
      try {
        const response = await fetch(endPoint, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        results = (await response.json()) as responseData<T>;
      } catch (error) {
        results = null; // Handle error if necessary
      }
    } else {
      try {
        const response: AxiosResponse<responseData<T>> = await axios.put(
          endPoint,
          data
        );
        results = response.data;
      } catch (error: any) {
        results = error.response ? error.response.data : null;
      }
    }

    return results;
  };

  const remove = async <T, P>(
    endPoint: string,
    data?: T,
    useFetch?: boolean
  ): Promise<responseData<P> | null> => {
    let results: responseData<P> | null = null;

    if (useFetch) {
      try {
        const response = await fetch(endPoint, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        results = (await response.json()) as responseData<P>;
      } catch (error) {
        results = null; // Handle error if necessary
      }
    } else {
      try {
        const response: AxiosResponse<responseData<P>> = await axios.delete(
          endPoint,
          { data }
        );
        results = response.data;
      } catch (error: any) {
        results = error.response ? error.response.data : null;
      }
    }

    return results;
  };

  // CRUD object for convenience
  const CRUD = {
    create,
    read,
    upload,
    update,
    remove,
  };

  // Return individual functions and the CRUD object for flexibility
  return {
    create,
    read,
    update,
    remove,
    upload,
    CRUD,
  };
};
