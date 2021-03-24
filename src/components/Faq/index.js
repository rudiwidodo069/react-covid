import React, { useState } from 'react';

// css custom
import './faq.css';

// json 
import NavJson from './nav.json';
import ContentJson from './content.json';

export default function Index() {
    const [open, setOpen] = useState({ open: false, id: null });

    const openFaq = (open, id) => {
        open ? setOpen({ open: open, id: id }) : setOpen({ open: open, id: id });
    }

    const closeFaq = () => {
        setOpen({ open: false, id: null });
    }

    return (
        <section id="faq">
            <div className="box-faq">
                <div className="container">
                    <div className="title text-center fw-bold">FAQ</div>
                    <div className="grid-faq gap-4">
                        <NavComponentJson
                            navJson={NavJson} />
                        <ComponentFaqJson
                            componentJson={ContentJson}
                            open={open}
                            openFaq={(open, id) => openFaq(open, id)}
                            closeFaq={() => closeFaq()} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function NavComponentJson({ navJson }) {
    return (
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {
                navJson.map(value => {
                    return (
                        <button
                            key={value.id}
                            className={value.id === 1 ? `nav-link active` : `nav-link`}
                            id={`v-pills-${value.id}-tab`}
                            data-bs-toggle="pill"
                            data-bs-target={`#v-pills-${value.id}`}
                            type="button"
                            role="tab"
                            aria-controls={`v-pills-${value.id}`} aria-selected="true">{value.title}</button>
                    )
                })
            }
        </div>
    )
}

export function ComponentFaqJson({ componentJson, openFaq, closeFaq, open }) {
    return (
        <div className="tab-content" id="v-pills-tabContent">
            {
                componentJson.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={item.id === 1 ? `tab-pane fade show active` : `tab-pane fade`}
                            id={`v-pills-${item.id}`}
                            role="tabpanel"
                            aria-labelledby={`v-pills-${item.id}-tab`} >
                            {
                                item.title.map(item => {
                                    return (
                                        <div
                                            key={item.faq.id}
                                            className="item-content">
                                            <div className="item-title">
                                                {item.faq.title}
                                            </div>
                                            <div className="icon">
                                                {
                                                    open.open && open.id === item.faq.id ?
                                                        <i
                                                            className="bi bi-dash-circle fw-bold"
                                                            onClick={() => closeFaq()}></i> :
                                                        <i
                                                            className="bi bi-plus-circle fw-bold"
                                                            onClick={() => openFaq(open, item.faq.id)}></i>
                                                }
                                            </div>
                                            {
                                                open.open && open.id === item.faq.id ? <div className="item-msg">
                                                    {item.faq.msg}
                                                </div> : ''
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}