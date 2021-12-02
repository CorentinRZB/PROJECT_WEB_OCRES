import React from 'react';
import "../style/components/_planningComp.scss";

const PlanningComp = () => {
    return (
        <div className="planning">
              <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23F4511E&ctz=Europe%2FParis&showTitle=0&showPrint=0&showCalendars=0&showTz=0&showNav=0&showDate=1&showTabs=0&mode=MONTH&title=Planning&src=YXJuYXVkLm1laWxob2M5MkBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23cc003c&color=%2333B679&color=%230B8043" 
              title="Planning Événements"
              width="800" 
              height="600" 
              frameborder="0" 
              scrolling="no"></iframe>
        </div>
    );
};

export default PlanningComp;