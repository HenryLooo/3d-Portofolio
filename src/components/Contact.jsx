import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const [loading, setLoading] = useState(false)

  const handleChange= (e) =>{
    const { name, value } = e.target

    setForm({...form, [name]: value})
  }
  const handleSubmit= (e) =>{
    e.preventDefault()
    setLoading(true)
    //template_syyv6k5
    //service_2m45sf2
    //public wPUvG0ilYuqRKSmVW
    emailjs.send(
      'service_2m45sf2',
      'template_syyv6k5',
      {
      from_name: form.name,
      to_name: 'Henry',
      from_email: form.email,
      to_email: 'henry.zhongsan@binus.ac.id',
      message: form.message
      },
      'wPUvG0ilYuqRKSmVW'
    )
    .then(()=>{
      setLoading(false)
      alert('Message Sent! I will get back to you ASAP!')
      setForm({
        name: '',
        email:'',
        message: ''
      })
    }, (error) =>{
      setLoading(false)
      alert('Something went wrong!')
    }
    
    )
  }

  return(
    <div className='xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          Or Email me through here!
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-8 mt-12'>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input type="text"
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Your Name'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg
            outlined-none border-none font-medium' />
          </label>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input type="email"
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Your Email'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg
            outlined-none border-none font-medium' />
          </label>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Your Message'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg
            outlined-none border-none font-medium' />
          </label>

          <button type='submit'
          className='bg-white py-3 px-8 outlined-none w-fit text-tertiary font-bold shadow-md shadow-primary
          rounded-xl'>
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right','tween',0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
    
  )
}

export default SectionWrapper(Contact,"contact")