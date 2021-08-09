import style from '../../styles/shared/Footer.module.scss' 


const Footer = () => {
    return (
        <div className={[style.footer_box, 'px-5'].join(' ')}>
            <h6>
                 M&C 2021 &copy;
            </h6>
        </div>
    );
}

export default Footer;
