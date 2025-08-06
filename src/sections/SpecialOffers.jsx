import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
            </div>

            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
                    <span className="text-coral-red"> Special</span> Offers
                </h2>
                <p className="mt-4 lg:max-w-lg info-text text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit debitis magni. Lorem ipsum dolor sit amet.</p>
                <p className="mt-6 lg:max-w-lg info-text text-justify">Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eos maiores similique. ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconURL={arrowRight}/>
                    <Button label="Learn more" backgroundColor = "bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers