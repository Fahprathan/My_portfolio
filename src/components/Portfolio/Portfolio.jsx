import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423472193_700922688779323_2939021058499717267_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFE062M9-Q-NErONYA6-vhwMEkuIKQVozIwSS4gpBWjMtFsMVDIrdGh0qpnrAbaFuQG-UGBp9w5bPuRtqAAQZVl&_nc_ohc=vHTHCKxVr2IAX8Q-t_4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQfg6lhp99YgzAvKAKnCsLyf7fInX3EShWdVM3J_f2o5w&oe=66079C69" alt="freecodecamp certificate" />
            <p>Freecodecamp Certificate</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429091663_1102956710749138_8068689157621528060_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFEPHKZe5MNi_vsyJhVJB4HB-pmcrP4OI4H6mZys_g4jiKbdKFYrDZ0vzsYFpYqsCsnM_dB9L0iTbC6cGPIV0cp&_nc_ohc=O0eqJ9WxYYUAX8vvn35&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRDVueF_MHwYfbMDC3OyxFf2JbxhBhVo3W2zrQrVidSyg&oe=6607A5AD" alt="Certificate of achievement" />
            <p>Certificate of achievement</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423454336_1426374488264817_5001978744066048097_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHYiBEbrUM0kug6QL__MVnxlFaR8ek9pZ-UVpHx6T2ln3fRc0FoGvJFSNKGElAdGfARk-0m2F9lqrdREgf9ZQIE&_nc_ohc=P_C1t7HiugIAX8Gw1k_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTEsRS5BELKMpbV-bSrjB5VBC53VEgC-lejji2qm1In6Q&oe=6607B971" alt="Thimooc certificate" />
            <p>Thimooc certificate</p>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio