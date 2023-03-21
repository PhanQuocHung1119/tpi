import React, { useState, useRef } from 'react';
import styles from './ContactAConsultant.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { contactAConsultant } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import Image from 'next/image';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  max-width: 445px;
  background: #009e4a;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;

  text-align: center;
  border-radius: 6px;
  color: #ffffff;
  margin-bottom: 24px;
  border: unset;
`;
const ContactAConsultant = () => {
  const [{ error, validated, showPass, showEye }, setState] = useState({
    error: false,
    validated: false,
    showPass: false,
    showEye: false,
  });
  const refContainer = useRef();
  const refBotton = useRef();
  const refLang = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refBotton, styles);
  useChooseLanguage(contactAConsultant, refLang);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    event.stopPropagation();
    event.preventDefault();
    if (form.checkValidity() === false) {
      return;
    }
  };

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['desc']}>{refLang.current?.desc}</div>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className={styles['form-main']}
        >
          <div className={styles['form-title-important']}>
            {refLang.current?.username.label}
          </div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={refLang.current?.username.desc}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập họ tên vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title-important']}>
            {refLang.current?.email.label}
          </div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='email'
              name='username'
              placeholder={refLang.current?.email.desc}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập Email vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>
            {refLang.current?.address.label}
          </div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={refLang.current?.address.desc}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>
            {refLang.current?.typeProduct.label}
          </div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={refLang.current?.typeProduct.desc}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>
            {refLang.current?.phone.label}
          </div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={refLang.current?.phone.desc}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>
            {refLang.current?.register.title}
          </div>
          <div className={styles['form-checkbox']}>
            <Form.Check id={`check-api`}>
              <Form.Check.Input isValid />
              <Form.Check.Label>
                {refLang.current?.register.label1}
              </Form.Check.Label>
            </Form.Check>
            <Form.Check id={`check-api-2`}>
              <Form.Check.Input isValid />
              <Form.Check.Label>
                {refLang.current?.register.label2}
              </Form.Check.Label>
            </Form.Check>
          </div>

          <div className={styles['form-title']}>
            {refLang.current?.note.label}
          </div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={refLang.current?.note.desc}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <Button type='submit' color='primary'>
            {refLang.current?.button}
          </Button>
        </Form>
        <div className={styles['bottom-content']} ref={refBotton}>
          <div className={styles['title']}>
            {refLang.current?.directContact.title}
          </div>
          {refLang.current?.directContact.sub.map((item, idx) => (
            <div className={styles['sub-content']} key={idx}>
              <div className={styles['sub-content__title']}>{item.title}</div>
              {item.desc.map((_item, _idx) => (
                <div className={styles['sub-content__desc']} key={_idx}>
                  {_item}
                </div>
              ))}
              <div className={styles['sub-content__image']}>
                {/*Facebook&Youtube Button*/}
                <Image
                  src={item.button1}
                  alt=''
                  width={422}
                  height={70}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                  priority
                />
              </div>
              <div className={styles['sub-content__image']}>
                <Image
                  src={item.button2}
                  alt=''
                  width={422}
                  height={70}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(ContactAConsultant);
