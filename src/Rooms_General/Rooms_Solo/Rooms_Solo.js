import React from 'react'
import styles from './Rooms_Solo.module.css'
import Navigation from '../../components/Nav/Nav';

class Solo extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <div className={styles.carousel_image + ' '}>
                    a
                </div>
            </>
        )
    }
}

export default Solo;