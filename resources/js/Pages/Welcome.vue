<template>
    <div id="home">
        <header>
            <div class="container">
                <div class="grid grid-cols-2 gap-15">
                    <div>
                        <inertia-link :href="`/`">
                            <img src="/images/logo-menu.png" alt="Logo Toyota" class="block my-1">
                        </inertia-link>
                    </div>
                    <div class="my-auto">
                        <button class="block bg-white relative ml-auto h-5 w-6">
                            <span class="spanMenu top-11"></span>
                            <span class="spanMenu top-12"></span>
                            <span class="spanMenu top-13"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <section id="banners" class="mt-8">
            <div class="container">
                <div class="glider-contain">
                    <div class="glider grid grid-cols-1">
                        <div class="rounded-t-lg">
                            <div class="topo">
                                <img src="images/mobile/banner1.png" alt="Banner 1" class="block w-full">
                            </div>
                            <div class="desc block pt-5 pb-9 px-4 bg-black text-center align-middle rounded-b-lg">
                                <img src="images/mobile/logo-yaris2022.png" alt="Logo Yaris" class="block m-auto">
                                <p class="text-base mt-4 mb-5 text-white">Com mais conectividade:  Multimídia Toyota Play+ com Android Auto® e Apple CarPlay®</p>
                                <a href="#" class="text-sm uppercase py-3 px-4 my-3 bg-red-600 rounded-md m-auto text-white">Saiba Mais</a>
                            </div>
                        </div>
                        <div class="rounded-t-lg">
                            <div class="topo">
                                <img src="images/mobile/banner1.png" alt="Banner 1" class="block w-full">
                            </div>
                            <div class="desc block pt-5 pb-9 px-4 bg-black text-center align-middle rounded-b-lg">
                                <img src="images/mobile/logo-yaris2022.png" alt="Logo Yaris" class="block m-auto">
                                <p class="text-base mt-4 mb-5 text-white">Com mais conectividade:  Multimídia Toyota Play+ com Android Auto® e Apple CarPlay®</p>
                                <a href="#" class="text-sm uppercase py-3 px-4 my-3 bg-red-600 rounded-md m-auto text-white">Saiba Mais</a>
                            </div>
                        </div>
                        <div class="rounded-t-lg">
                            <div class="topo">
                                <img src="images/mobile/banner1.png" alt="Banner 1" class="block w-full">
                            </div>
                            <div class="desc block pt-5 pb-9 px-4 bg-black text-center align-middle rounded-b-lg">
                                <img src="images/mobile/logo-yaris2022.png" alt="Logo Yaris" class="block m-auto">
                                <p class="text-base mt-4 mb-5 text-white">Com mais conectividade:  Multimídia Toyota Play+ com Android Auto® e Apple CarPlay®</p>
                                <a href="#" class="text-sm uppercase py-3 px-4 my-3 bg-red-600 rounded-md m-auto text-white">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <button aria-label="Previous" class="glider-prev">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.6" cx="22.5" cy="22.5" r="22.5" fill="black"/>
                            <path d="M10.8012 23.4024L31.0503 12.4887L31.0522 34.3126L10.8012 23.4024Z" fill="#C4C4C4"/>
                        </svg>
                    </button>
                    <button aria-label="Next" class="glider-next">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.6" cx="22.5" cy="22.5" r="22.5" fill="black"/>
                            <path d="M36 23.5L15.75 34.3253V12.6747L36 23.5Z" fill="#C4C4C4"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
        <section id="models" class="my-50">
            <div class="container">
                <div class="grid grid-cols-1 gap-15">
                    <div class="">
                        <h2 class="text-black text-2xl text-center font-bold mb-3 uppercase">Explore todos os modelos</h2>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-1 md:grid-cols-6 gap-15">
                            <div class="md:col-start-2 md:col-span-4">
                                <div class="flex justify-around">
                                    <a href="#" class="link active">Passeio</a>
                                    <a href="#" class="link">Pickups e SUVs</a>
                                    <a href="#" class="link">Híbrido</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="glider-contain">
                        <div class="grid grid-cols-2 gap-15 mt-7 glider">
                            <div class="text-center">
                                <img src="images/mobile/yaris.png" alt="Yaris" class="block w-full">
                                <p class="text-center text-xs mb-5">Yaris Hatch</p>
                                <button class="text-base uppercase py-1 px-2 bg-red-600 rounded-md m-auto text-white block">Explorar</button>
                                <a href="#" class="mt-3 text-red-600 border-b-1 text-sm inline-block">
                                    Monte o seu&nbsp;
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline">
                                        <path d="M11.3404 4.85355C11.5357 4.65829 11.5357 4.34171 11.3404 4.14645L8.15842 0.964466C7.96316 0.769204 7.64657 0.769204 7.45131 0.964466C7.25605 1.15973 7.25605 1.47631 7.45131 1.67157L10.2797 4.5L7.45131 7.32843C7.25605 7.52369 7.25605 7.84027 7.45131 8.03553C7.64657 8.2308 7.96316 8.2308 8.15842 8.03553L11.3404 4.85355ZM0.986847 5H10.9868V4H0.986847V5Z" fill="#EF1B2F"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="text-center">
                                <img src="images/mobile/yaris.png" alt="Yaris" class="block w-full">
                                <p class="text-center text-xs mb-5">Yaris Hatch</p>
                                <button class="text-base uppercase py-1 px-2 bg-red-600 rounded-md m-auto text-white block">Explorar</button>
                                <a href="#" class="mt-3 text-red-600 border-b-1 text-sm inline-block">
                                    Monte o seu&nbsp;
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline">
                                        <path d="M11.3404 4.85355C11.5357 4.65829 11.5357 4.34171 11.3404 4.14645L8.15842 0.964466C7.96316 0.769204 7.64657 0.769204 7.45131 0.964466C7.25605 1.15973 7.25605 1.47631 7.45131 1.67157L10.2797 4.5L7.45131 7.32843C7.25605 7.52369 7.25605 7.84027 7.45131 8.03553C7.64657 8.2308 7.96316 8.2308 8.15842 8.03553L11.3404 4.85355ZM0.986847 5H10.9868V4H0.986847V5Z" fill="#EF1B2F"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="text-center">
                                <img src="images/mobile/yaris.png" alt="Yaris" class="block w-full">
                                <p class="text-center text-xs mb-5">Yaris Hatch</p>
                                <button class="text-base uppercase py-1 px-2 bg-red-600 rounded-md m-auto text-white block">Explorar</button>
                                <a href="#" class="mt-3 text-red-600 border-b-1 text-sm inline-block">
                                    Monte o seu&nbsp;
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline">
                                        <path d="M11.3404 4.85355C11.5357 4.65829 11.5357 4.34171 11.3404 4.14645L8.15842 0.964466C7.96316 0.769204 7.64657 0.769204 7.45131 0.964466C7.25605 1.15973 7.25605 1.47631 7.45131 1.67157L10.2797 4.5L7.45131 7.32843C7.25605 7.52369 7.25605 7.84027 7.45131 8.03553C7.64657 8.2308 7.96316 8.2308 8.15842 8.03553L11.3404 4.85355ZM0.986847 5H10.9868V4H0.986847V5Z" fill="#EF1B2F"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="text-center">
                                <img src="images/mobile/yaris.png" alt="Yaris" class="block w-full">
                                <p class="text-center text-xs mb-5">Yaris Hatch</p>
                                <button class="text-base uppercase py-1 px-2 bg-red-600 rounded-md m-auto text-white block">Explorar</button>
                                <a href="#" class="mt-3 text-red-600 border-b-1 text-sm inline-block">
                                    Monte o seu&nbsp;
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline">
                                        <path d="M11.3404 4.85355C11.5357 4.65829 11.5357 4.34171 11.3404 4.14645L8.15842 0.964466C7.96316 0.769204 7.64657 0.769204 7.45131 0.964466C7.25605 1.15973 7.25605 1.47631 7.45131 1.67157L10.2797 4.5L7.45131 7.32843C7.25605 7.52369 7.25605 7.84027 7.45131 8.03553C7.64657 8.2308 7.96316 8.2308 8.15842 8.03553L11.3404 4.85355ZM0.986847 5H10.9868V4H0.986847V5Z" fill="#EF1B2F"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="inline-flex items-center justify-center">
                            <button aria-label="Previous" class="glider-prev">
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L2 5.23529L7 9" stroke="#EF1B2F" stroke-width="2"/></svg>
                            </button>
                            <div role="tablist" class="dots">
                                <span class="active text-xs text-red-600 font-bold">1</span>
                                <span class="text-xs">2</span>
                            </div>
                            <button aria-label="Next" class="glider-next">
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L6 4.76471L1 1" stroke="#EF1B2F" stroke-width="2"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            laravelVersion: String,
            phpVersion: String,
        },
        mounted () {
            var slide1 = new Glider(document.querySelector('#banners .glider'), {
                slidesToShow: 1,
                draggable: true,
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                }
            });
            var slide2 = new Glider(document.querySelector('#models .glider'), {
                slidesToShow: 2,
                draggable: true,
                dots: '.dots',
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                }
            });
        }
    }
</script>

<style>
    .glider,.glider-contain{margin:0 auto;position:relative}.glider,.glider-track{transform:translateZ(0)}.glider-dot,.glider-next,.glider-prev{border:0;padding:0;user-select:none;outline:0}.glider-contain{width: 100%;}.glider{overflow-y:hidden;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}.glider-track{width:100%;margin:0;padding:0;display:flex;z-index:1}.glider.draggable{user-select:none;cursor:-webkit-grab;cursor:grab}.glider.draggable .glider-slide img{user-select:none;pointer-events:none}.glider.drag{cursor:-webkit-grabbing;cursor:grabbing}.glider-slide{user-select:none;justify-content:center;align-content:center;width:100%;min-width:150px;margin-right:10px}.glider-slide:last-child{margin-right:0;}.glider-slide img{max-width:100%}.glider::-webkit-scrollbar{opacity:0;height:0}.glider-next,.glider-prev{position:absolute;background:0 0;z-index:2;font-size:40px;text-decoration:none;left:0px;top:20%;cursor:pointer;color:#666;opacity:1;line-height:1;transition:opacity .5s cubic-bezier(.17,.67,.83,.67),color .5s cubic-bezier(.17,.67,.83,.67)}.glider-next:focus,.glider-next:hover,.glider-prev:focus,.glider-prev:hover{color:#ccc}.glider-next{right:0px;left:auto}.glider-next.disabled,.glider-prev.disabled{opacity:.25;color:#666;cursor:default}.glider-hide{opacity:0}.glider-dots{user-select:none;display:flex;flex-wrap:wrap;justify-content:center;margin:0 auto;padding:0}.glider-dot{display:block;cursor:pointer;color:#1eb580;border-radius:999px;background:#1eb580;border: 1px solid #96eecf;width:12px;height:12px;margin:7px}.glider-dot.active{background:#0b4632;border: 1px solid #96eecf;}@media(max-width:36em){.glider::-webkit-scrollbar{opacity:1;-webkit-appearance:none;width:7px;height:3px}.glider::-webkit-scrollbar-thumb{opacity:1;border-radius:99px;background-color:rgba(156,156,156,.25);-webkit-box-shadow:0 0 1px rgba(255,255,255,.25);box-shadow:0 0 1px rgba(255,255,255,.25)}}
</style>