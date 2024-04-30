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