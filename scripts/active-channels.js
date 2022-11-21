const d = document;

export default function activeChannels(btnActive,boxChannels,btnDesactive){
    const channels = d.getElementById(boxChannels);
    const btn = d.getElementById(btnActive);
    const btnX = d.getElementById(btnDesactive)

    btn.addEventListener('click',()=>{
        channels.classList.toggle('channels-active');
    },true);

    btnX.addEventListener('click',()=>{
        channels.classList.toggle('channels-active');
    });

}