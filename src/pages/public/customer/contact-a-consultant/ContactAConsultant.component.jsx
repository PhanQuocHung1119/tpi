import React, { useState, useRef } from 'react';
import styles from './ContactAConsultant.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const label = {
  password: 'Mật khẩu',
  username: 'Nhập họ tên vào đây',
  email: 'Nhập Email vào đây',
  address: 'Nhập địa chỉ vào đây',
  typeProduct: 'Nhập loại hàng vào đây',
  phone: 'Nhập số điện thoại vào đây',
  note: 'Nhập ghi chú vào đây',
};

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

  useObserverItem(refContainer, styles);
  useObserverItem(refBotton, styles);

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
        <div className={styles['title']}>Liên hệ tư vấn</div>
        <div
          className={styles['desc']}
        >{`Khách hàng cần tư vấn từ TPI, xin vui lòng điền đầy đủ thông tin sẽ có nhân viên liên hệ hỗ trợ trong vòng 24 giờ.`}</div>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className={styles['form-main']}
        >
          <div className={styles['form-title-important']}>{`Họ tên`}</div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={label.username}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập họ tên vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title-important']}>{`Email`}</div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='email'
              name='username'
              placeholder={label.email}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập Email vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>{`Địa chỉ`}</div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={label.address}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>{`Loại hàng`}</div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={label.typeProduct}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>{`Tư vấn dịch vụ`}</div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={label.phone}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['form-title']}>{`Đăng ký`}</div>
          <div className={styles['form-checkbox']}>
            <Form.Check id={`check-api`}>
              <Form.Check.Input isValid />
              <Form.Check.Label>{`Chiếu xạ`}</Form.Check.Label>
            </Form.Check>
            <Form.Check id={`check-api-2`}>
              <Form.Check.Input isValid />
              <Form.Check.Label>{`Gửi kho`}</Form.Check.Label>
            </Form.Check>
          </div>

          <div className={styles['form-title']}>{`Ghi chú`}</div>
          <Form.Group className='mb-4' controlId='formHorizontalEmail'>
            <Form.Control
              type='text'
              name='username'
              placeholder={label.note}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Nhập địa chỉ vào đây
            </Form.Control.Feedback>
          </Form.Group>

          <Button type='submit' color='primary'>
            Gửi thông tin
          </Button>
        </Form>
        <div className={styles['bottom-content']} ref={refBotton}>
          <div className={styles['title']}>Liên hệ trực tiếp</div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>
              Tư vấn trực tiếp: Bộ Phận Thông Tin.
            </div>
            <div className={styles['sub-content__desc']}>Số điện thoại:</div>
            <div className={styles['sub-content__desc']}> Email:</div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>
              Nhận lịch đăng ký:
            </div>
            <div className={styles['sub-content__desc']}>
              Bộ Phận Tiếp Nhận :
            </div>
            <div className={styles['sub-content__desc']}> Số Điện Thoại:</div>
            <div className={styles['sub-content__desc']}> Email:</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(ContactAConsultant);
