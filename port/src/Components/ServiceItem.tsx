
interface ServiceItemProps {
  title: string
  para: string
  img: string
}
function ServiceItem({ title, para,img }: Readonly<ServiceItemProps>) {
  return (
    <div className="container" id="service-item"> 
    <div id ="service-img">
        <img src={img} alt="service" style={{width:'100%',height:'100%' ,objectFit:'fill'}} />
        </div> 
<h4 className="mt-4">{title}</h4>
<p>{para}</p>
    </div>
  )
}

export default ServiceItem