
import useSWR from 'swr'

const API_URL = import.meta.env.VITE_API_URL
const fetcher = url => fetch(url).then(r => r.json())

const FetchDog = () => {
const { data, error, isLoading } = useSWR(`${API_URL}/api/dog`, fetcher)

if (error) return <div>Loading failed.</div>
if (isLoading) return <div>Loading...</div>

return <div><img src={data.message} alt="Random Dog" style={{maxWidth: "500px", maxHeight: "500px"}}/></div>
}

export default FetchDog;