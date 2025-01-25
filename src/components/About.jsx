import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";

export const About = () => {
    console.log("aboutImg1",aboutImg1)
  return (
    <div className=" md:px-14 px-4 max-w-s mx-auto space-y-10">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className=" md:w-1/2">
                <img src={aboutImg1} alt="" />
            </div>
            {/* about content */}
            <div className="md:w-2/5">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">we have been improving our product <span className="text-secondary">for many years.</span></h2>
                <p className="text-tartiary text-lg mb-7">Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología.</p>
                <button className="btnPrimary">Get started</button>
            </div>
        </div>
        
        {/* second part */}
        <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-8">
            
            <div className=" md:w-1/2">
                <img src={aboutImg2} alt="" />
            </div>
            {/* about content */}
            <div className="md:w-2/5">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">You cane Practice at any <span className="text-secondary">time convenient for you.</span></h2>
                <p className="text-tartiary text-lg mb-7">Ser el aliado estratégico más confiable y seguro para sus operaciones de nuestros clientes; por brindar un servicio de alto valor mediante nuestra flota moderna y equipo altamente calificado.</p>
                <button className="btnPrimary">Get started</button>
            </div>
        </div>
    </div>
  )
}
