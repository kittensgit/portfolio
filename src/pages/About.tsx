import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    const aboutText =
        "Hello! I'm a frontend developer with a focus on React JS and Redux. My skills include developing interactive user interfaces using React components, managing application state with Redux, and performing asynchronous server interactions using Redux-Thunk and Redux-Toolkit.";

    const skillsList = ['js', 'css', 'ts', 'html'];

    const [displayText, setDisplayText] = useState('');
    const [displaySkills, setDisplaySkills] = useState<string[]>([]);
    const [displaySkillsHeader, setDisplaySkillsHeader] = useState('');

    useEffect(() => {
        // Анимация текста "About me"
        let textIndex = 0;
        const textIntervalId = setInterval(() => {
            setDisplayText((prevText) => {
                const nextChar = aboutText[textIndex];
                textIndex++;

                if (textIndex === aboutText.length) {
                    clearInterval(textIntervalId);

                    // Запуск анимации для заголовка и списка навыков после завершения анимации "About me"
                    animateSkillsHeader();
                    animateSkillsList();
                }

                return prevText + nextChar;
            });
        }, 50);

        const animateSkillsHeader = () => {
            // Анимация заголовка "Skills"
            let headerIndex = 0;
            const headerIntervalId = setInterval(() => {
                setDisplaySkillsHeader((prevHeader) => {
                    const nextChar = 'Skills'[headerIndex];
                    headerIndex++;

                    if (headerIndex === 'Skills'.length) {
                        clearInterval(headerIntervalId);
                    }

                    return prevHeader + nextChar;
                });
            }, 50);
        };

        const animateSkillsList = () => {
            // Анимация списка навыков
            let skillsIndex = 0;
            const skillsIntervalId = setInterval(() => {
                setDisplaySkills((prevSkills) => {
                    const nextSkill = skillsList[skillsIndex];
                    skillsIndex++;

                    if (skillsIndex === skillsList.length) {
                        clearInterval(skillsIntervalId);
                    }

                    return [...prevSkills, nextSkill];
                });
            }, 300); // Интервал для списка можно увеличить, чтобы замедлить анимацию
        };

        return () => {
            clearInterval(textIntervalId);
        };
    }, []);

    return (
        <div>
            <Link to={'/'}>{'<'}- Go back</Link>
            <h1 className="float-text">About me</h1>
            <p>{displayText}</p>
            <h2>{displaySkillsHeader}</h2>
            <ul>
                {displaySkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default AboutMe;
