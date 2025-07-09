import {Head, Link, usePage} from "@inertiajs/react";
import HeaderLayout from "@/Layouts/Site/HeaderLayout";
import MenuLink from "@/models/Link/MenuLink";
import Language from "@/models/language/Language";
import React, {useRef} from "react";
import {Box} from "@mui/material";
import BlockProps from "@/Interfaces/Site/BlockProps";
import MainSlider from "@/Components/Site/MainSlider/MainSlider";
import Services from "@/Components/Site/Services/Services";
import SiteDivider from "@/Components/Site/Divider/SiteDivider";
import styles from "./styles.module.scss";
import Clients from "@/Components/Site/Clients/Clients";
import Galleries from "@/Components/Site/Gallery/Galleries";
import ClientDivider from "@/Components/Site/Divider/ClientDivider";
import Mission from "@/Components/Site/Mission/Mission";
import About from "@/Components/Site/About/About";
import Contact from "@/Components/Site/Contact/Contact";
import {useAppSelector, useAppDispatch} from "@/Redux/Store/hook";
import {setSpinner} from "@/Redux/Reducers/SpinnerSlice/SpinnerSlice";
import LineDivider from "@/Components/Site/Divider/LineDivider";
import LineDividerReverse from "@/Components/Site/Divider/LineDividerReverse";
import LinkListProps from "@/Interfaces/Site/LinkListProps";
import {gsap, Power3} from "gsap";
import {useGSAP} from "@gsap/react";
import Articles from "@/Components/Site/Articles/Articles";
import Industries from "@/Components/Site/Industries/Industries";
import News from "@/Components/Site/News/News";
import HeroSlider from "@/Pages/Site/Home/Components/HeroSlider";
import AboutUs from "@/Pages/Site/Home/Components/AboutUs";
import {ArrowRight, Award, Building, Phone, Users} from "lucide-react";
import ClientProps from "@/Interfaces/Site/ClientProps";
import ProjectProps from "@/Interfaces/Site/ProjectProps";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import CommonService from "@/Services/CommonService/CommonService";
import {Container} from "typedi";
import "reflect-metadata";
import BlockCategories from "@/Enums/BlockCategories";
import MenuService from "@/Services/MenuService/MenuService";
import ContactFormV2 from "@/Components/Site/Contact/ContactFormV2";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
interface HomeProps extends LinkListProps{
    mainSliders: BlockProps [],
    services: BlockProps [],
    clients: ClientProps [],
    projects: ProjectProps [],
    galleries: BlockProps [],
    missions: BlockProps [],
    about: BlockProps [],
    news: BlockProps [],
    articles: BlockProps [],
    industries: BlockProps [],
}
const Home:React.FC<HomeProps> = ({
                                        mainLinks,
                                        socialLinks,
                                        footerLinks,
                                        contactLinks,
                                        logo,
                                        languages,
                                        mainSliders,
                                        services,
                                        clients,
                                        projects,
                                        galleries,
                                        missions,
                                        about,
                                        news,
                                        articles,
                                        industries,
                                  }) => {
    const commonService = Container.get(CommonService);
    const menuService = Container.get(MenuService);
    const yearsOfExperience = new Date().getFullYear() - 2002;
    const aboutUs = about[0];
    const lang = usePage().props.lang;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const aboutSectionRef = useRef<HTMLElement>(null);
    const aboutTextRef = useRef<HTMLDivElement>(null);
    const aboutImageRef = useRef<HTMLDivElement>(null);
    const aboutBadgeRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            // About section animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutSectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(aboutSectionRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
            )
                .fromTo(aboutTextRef.current,
                    { opacity: 0, x: -50 },
                    { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.4"
                )
                .fromTo(aboutImageRef.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.6"
                )
                .fromTo(aboutBadgeRef.current,
                    { opacity: 0, scale: 0 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
                    "-=0.2"
                );

            // Clients section animation
            gsap.fromTo(".client-card",
                { opacity: 0, y: 30, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".clients-section",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Projects section animation
            gsap.fromTo(".project-card",
                { opacity: 0, y: 50, rotationY: 15 },
                {
                    opacity: 1,
                    y: 0,
                    rotationY: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".projects-section",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Contact section animation
            gsap.fromTo(".contact-left",
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".contact-section",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(".contact-right",
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".contact-section",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Form fields animation
            gsap.fromTo(".form-field",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".contact-form",
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    React.useEffect(() => {
        // if (mainLinks.length > 0) {
        //     dispatch(setSpinner(false));
        // }
        setTimeout(() => {
            dispatch(setSpinner(false));
        }, 3000)
    }, [mainLinks])

    // ========================================================//

    return(
        <div className="min-h-screen bg-background">
            <HeaderLayout
                mainLinks={mainLinks}
                socialLinks={socialLinks}
                contactLinks={contactLinks}
                footerLinks={footerLinks}
                logo={logo}
                languages={languages}
            >
                <Head title={'Home'}></Head>

                {/* Hero Slider */}
                <HeroSlider slides={mainSliders}></HeroSlider>

                {/* About Us Section */}
                <section
                    ref={aboutSectionRef}
                    className="py-20 bg-secondary/50"
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div ref={aboutTextRef}>
                                <h2 className="text-4xl font-bold mb-6 text-foreground">{aboutUs.title}</h2>
                                <p
                                    className="text-lg text-muted-foreground mb-6 leading-relaxed"
                                    dangerouslySetInnerHTML={{__html: aboutUs.description}}
                                >
                                </p>
                                <Link
                                    href={`/${lang}/block/${commonService.toSnakeCase(aboutUs.category)}`}
                                    className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover:scale-105"
                                >
                                    {t('learn-more-about-us')}
                                    <ArrowRight className="ml-2 h-5 w-5"/>
                                </Link>
                            </div>
                            <div ref={aboutImageRef} className="relative">
                                <img
                                    // src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    src={`/file/blocks/${aboutUs.images[0].url}`}
                                    alt="D S H Team"
                                    className="rounded-lg shadow-2xl w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div ref={aboutBadgeRef}
                                     className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                                    <div className="text-3xl font-bold">{yearsOfExperience}+</div>
                                    <div className="text-sm">{t('years-of-excellence')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clients Section */}
                <section className="py-20 bg-background clients-section">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('our-valued-clients')}</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t('client-home')}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {clients
                                .filter(client =>
                                    client.category === commonService.toSnakeCase(BlockCategories.CLIENTS))
                                .map((client, index) => (
                                <div
                                    key={index}
                                    className="text-center group client-card"
                                >
                                    <div className="bg-card border border-border rounded-lg p-6 h-24 flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                                        <Users className="h-8 w-8 text-primary mb-2" />
                                    </div>
                                    <p className="mt-3 text-sm font-medium text-foreground">{client.title}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                // to="/clients"
                                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover:scale-105"
                                href={`/${lang}/block/${commonService.toSnakeCase(clients[0].category)}`}                            >
                                {t('clients-more')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-secondary/50 projects-section">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('featured-projects')}</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t('projects-home')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects
                                .filter(project => project.isCompleted)
                                .sort(() => 0.5 - Math.random())
                                .slice(0, 3).map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group project-card hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={`/file/blocks/${project.images[0].url}`}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                        project.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                                        <p
                                            className="text-muted-foreground mb-4"
                                            dangerouslySetInnerHTML={{__html: project.description}}
                                        ></p>
                                        <div className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                                            <Building className="h-4 w-4 mr-2" />
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href={`/${lang}/block/${commonService.toSnakeCase(projects[0].category)}`}
                                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold mr-4 hover:scale-105"
                            >
                                {t('view-projects')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            {/*<Link*/}
                            {/*    href="/projects-under-execution"*/}
                            {/*    className="inline-flex items-center border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:scale-105"*/}
                            {/*>*/}
                            {/*    Projects Under Execution*/}
                            {/*    <ArrowRight className="ml-2 h-5 w-5" />*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section className="py-20 bg-background contact-section">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="contact-left">
                                <h2 className="text-4xl font-bold mb-6 text-foreground">{t('get-in-touch')}</h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {t('contact-home')}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center hover:text-primary transition-colors duration-300">
                                        <Phone className="h-5 w-5 text-primary mr-3" />
                                        <span className="text-foreground">{menuService.getSplitLink(contactLinks, 'mobile')}</span>
                                    </div>
                                    <div className="flex items-center hover:text-primary transition-colors duration-300">
                                        <Award className="h-5 w-5 text-primary mr-3" />
                                        <span className="text-foreground">{menuService.getSplitLink(contactLinks, 'mail')}</span>
                                    </div>
                                </div>
                            </div>

                            <ContactFormV2 industries={industries}></ContactFormV2>
                        </div>
                    </div>
                </section>

            </HeaderLayout>
        </div>


    );
}
export default Home;
