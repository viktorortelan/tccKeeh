import './index.scss';

const Popup = ({index, titulo, texto, img }) => {

    
    return (
        <div className='popup' style={{zIndex: `${index}`}}>

            <div className='left'>
             
                <div className='title'>
                    <h1>{titulo}</h1>
                </div>

                <div className='txt'>
                    <p>
                        {texto}
                    </p>

                    <button>Agende</button>


                </div>


            </div>
            <div className='right'>
                <div className='simulacao'><img src={`/assets/image/${img}`} /></div>
            </div>
        </div>
    );
}

export default Popup;