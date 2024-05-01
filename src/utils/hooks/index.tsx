/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

export const useFetch = (url: string): {data: [], isLoading: boolean} => {
  const [data, setData] = useState<[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return {data, isLoading};
}


// export const useFetchById = ({url, id}: {url: string, id?: string}): {data: [], isLoading: boolean, error: boolean} => {
//   const [data, setData] = useState<[]>([]);
//   const [isLoading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<boolean>(false);

//   useEffect(() => {
//     if (!url) return
//     setLoading(true)
//     async function fetchData() {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();

//         setData(data)
//         // console.log(data, id)
//         // const item = data.find((item: any) => item.id === id);
//         // if (item) {
//         //   console.log(item)
//         //   setData([item]);
//         // }
//       } catch (err) {
//         console.log(err)
//         setError(true)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchData()
//   }, [url, id])

//   return {data, isLoading, error};
// }
