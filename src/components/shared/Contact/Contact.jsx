"use client";
import React, { useRef } from 'react';
import { Input, TextArea, Button } from "@heroui/react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9b7sbrk', 'template_t6qgdoo', form.current, 'Gw0JwKahnPSpb7MqG')
      .then((result) => {
          console.log(result.text);
          alert("মেসেজ সফলভাবে পাঠানো হয়েছে!");
          e.target.reset(); // ফর্মটি খালি করার জন্য
      }, (error) => {
          alert(error.text);
          //alert("দুঃখিত, আবার চেষ্টা করুন।");
      });
  };
  
    return (
        <section id="contact" className="py-24 bg-[#020617] text-white">
            <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-xl px-6 py-6">
                <h2 className="text-3xl font-bold mb-8 text-blue-500">Contact Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*Left Side*/}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black font-display mb-6">
                            Let’s <span className="text-gradient">build something great</span>
                        </h2>

                        <p className="text-muted-foreground text-base mb-10 leading-relaxed">
                            I’m currently learning and building web development
                            projects. If you have any feedback, ideas, or
                            collaboration opportunities, feel free to reach out.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                                    📧
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                                        Email
                                    </p>
                                    <p className="font-semibold">
                                        mdsalauddin329132@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                                    📍
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                                        Location
                                    </p>
                                    <p className="font-semibold">Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Right Side*/}
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-white/5 border border-white/10 shadow-sm py-10 px-6 md:mr-6 rounded-xl">
                        <Input label="Name" name="name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition" placeholder="Enter Your Full Name" /><br/>
                        <Input label="Email" name="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition" placeholder="Enter Your email" /><br/>
                        <TextArea
                            label="Message"
                            name="message"
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:border-primary transition"
                            placeholder="Write Your message"
                        />

                        <Button type="submit" color="primary" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
