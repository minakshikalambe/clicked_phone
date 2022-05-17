
import ContactCard from './contactCard'
const initdata=[
    {
        id:1,
        name:"piku",
        email:"piku@pikucom",
        Phone:"91-9456728469"
    },
    {
        id:2,
        name:"ciku",
        email:"ciku@cikucom",
        Phone:"91-9456728469"
    },
    {
        id:3,
        name:"riku",
        email:"riku@rikucom",
        Phone:"91-9456728469"
    },
    {
        id:4,
        name:"bhiku",
        email:"bhiku@bhikucom",
        Phone:"91-9456728469"
    },
    {
        id:5,
        name:"rinku",
        email:"rinku@rinkucom",
        Phone:"91-9456728469"
    },
]
const CardList=()=>{
    // const [data, setData]=useState(initdata);
return(
   <div>
       {initdata.map((item)=>(
           <ContactCard key={item.id} name={item.name} email={item.email} Phone={item.Phone}/>
       ))
       }
   </div>
)

}
export default CardList