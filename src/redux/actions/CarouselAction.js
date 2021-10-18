
import { SET_CAROUSEL } from "./types/CarouselType";

import { quanLyPhimService } from "../../services/QuanLyPhimService";



export const getCarouselAction = ()=>{
    return async (dispatch)=>{
        try{
            // Su dung tham so thamSo
            const result = await quanLyPhimService.layDanhSachBanner();
            //Dua len reducer
    
            dispatch({
                type:SET_CAROUSEL,
                arrImg: result.data.content
            })
    
        } catch(errors){
            console.log('errors',errors);
        }
    };
}