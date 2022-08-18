import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development Projects
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 flex-grow dark:bg-black"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 font-bold text-xl tracking-wide">What I Offer:</h6>
        <div className="grid lg:grid-cols-2 gap-6 ">
          {services.map((service) => (
            <div className="lg:col-span-1 bg-gray-200 rounded-lg dark:bg-dark-200">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
