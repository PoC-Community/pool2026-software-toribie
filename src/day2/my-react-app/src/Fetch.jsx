
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

const FetchDog = () => {
const { data, error, isLoading } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher)

if (error) return <div>Loading failed.</div>
if (isLoading) return <div>Loading...</div>

return <div><img src={data.message} alt="Random Dog" style={{maxWidth: "500px", maxHeight: "500px"}}/></div>
}

export default FetchDog;