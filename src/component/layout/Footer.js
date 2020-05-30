import React from 'react'
import styles from '../footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.p}>Developed By Arpit Choudhary</p>
            <div class={styles.bottomright}>
                <a href="https://www.linkedin.com/in/arpitchoudhary90/" target="_blank">
                    <i class="fab fa-linkedin-in" id="linked-logo"></i>
                </a>
            </div>
        </div>
    )
}
