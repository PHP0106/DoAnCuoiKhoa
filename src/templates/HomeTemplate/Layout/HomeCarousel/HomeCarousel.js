import React,{useEffect} from 'react'
import { Carousel } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios'
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css';
import { layDanhSachPhimAction } from '../../../../redux/actions/QuanLyPhimActions';



export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer);

    const dispatch = useDispatch();

    //Se tu kich hoat khi component load ra
    useEffect(()=>{

        //1 action ={type:'},data}
        //2 {phai cai middleware} callBackFuntion (dispatch)

        const action = layDanhSachPhimAction();

        dispatch(action);
        
    },[])


    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize:'100%',
        backgroundRepeate:'no-repeat'
    };

    const renderImg =()=>{
        return arrImg.map((item,index)=>{
            return <div key={index}>
                <div style={{...contentStyle, backgroundImage:`url(${item.hinhAnh})`}}>
                    <img src={item.hinhAnh} className="opacity-0" alt="123" />
                </div>

            </div>
        })
    }


    return (
        <Carousel effect="fade" style={{width:'100%',padding:0,margin:0}} >
            {renderImg()}

        </Carousel>
    )
}
