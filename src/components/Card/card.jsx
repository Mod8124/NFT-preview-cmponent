import equilibrium from '../../assets/images/image-equilibrium.jpg';
import avatar from '../../assets/images/image-avatar.png';

export const Card = () => {
    return (
        <section className='bg-card-dk w-11-12 max-w-[350px] rounded-[25px] overflow-hidden p-[30px] m-auto'>

            <article className="w-full relative cursor-pointer">

            <div className="w-full h-[300px] rounded-[10px] overflow-hidden">
                <img className='h-full w-full' src={equilibrium} alt="image-equilibrium-cube-background"/>
            </div>

            <div className='absolute rounded-[10px] bg-cyan-dk w-full h-full transition ease-in-out duration-700 opacity-0 hover:opacity-100 top-0 flex items-center justify-center'>
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
            </div>
            </article>

            <article>
            <h1 className='font-bold text-white text-[22px] cursor-pointer pt-[30px] pb-[20px] hover:text-cyan-dk w-full transition ease-in-out duration-500'>Equilibrium #3429</h1>
            <p className='pb-[20px] w-full leading-6 text-soft-blue text-sm'>  Our Equilibrium collection promotes balance and calm.</p>

            <div className="flex text-soft-blue items-center leading-6 flex-1 gap-x-1 justify-between pb-[20px]">

            <p className='text-cyan-dk text-sm flex flex-row items-center gap-x-1'>  
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
                0.041 ETH
            </p>
            <p className='flex flex-row text-sm items-center gap-x-1'>
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>  
                3 days left
                </p>
            </div>

            </article>
            
            <article className='flex pt-[20px] border-t-2 border-line'>

            <div className="flex-[20%] ">
            <div className='w-full max-w-[40px] border-white border-[1px] rounded-full h-[40px]'>
                <img className='w-full h-full' src={avatar} alt="avatar boy"/>
            </div>
            </div>

            <div className='flex flex-[86%] items-center'>
                 <p className='text-sm text-soft-blue'> Creation of <a className='text-white hover:text-cyan-dk transition ease-in-out duration-100 cursor-pointer'> Jules Wyvern</a></p>
            </div>

            </article>

    </section>
    );
};