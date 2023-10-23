import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={'Privacy Policy'} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="privacy-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <div className="privacy-card align-items-center gap-15 mb-5">
              <div className='border-0 mt-5'>
                <h5 className='title'>The Standard Lorem Ipsum Passage</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eligendi inventore sunt in quidem vel quibusdam consectetur deserunt atque numquam labore optio nobis ipsum at sequi illo molestiae laboriosam aspernatur sit. Vero, tempora blanditiis reiciendis beatae quas dolore incidunt inventore.</p>
              </div>
              <div className='border-0 mt-5'>
                <h5 className='title'>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eligendi inventore sunt in quidem vel quibusdam consectetur deserunt atque numquam labore optio nobis ipsum at sequi illo molestiae laboriosam aspernatur sit. Vero, tempora blanditiis reiciendis beatae quas dolore incidunt inventore.</p>
              </div>
              <div className='border-0 mt-5'>
                <h5 className='title'>Certain Circumstances And Owing To The Claims Of Duty Or The Obligations</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eligendi inventore sunt in quidem vel quibusdam consectetur deserunt atque numquam labore optio nobis ipsum at sequi illo molestiae laboriosam aspernatur sit. Vero, tempora blanditiis reiciendis beatae quas dolore incidunt inventore.</p>
              </div>
              <div className='border-0 mt-5'>
                <h5 className='title'>Integer Ultrices Laoreet Nunc In Gravida</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eligendi inventore sunt in quidem vel quibusdam consectetur deserunt atque numquam labore optio nobis ipsum at sequi illo molestiae laboriosam aspernatur sit. Vero, tempora blanditiis reiciendis beatae quas dolore incidunt inventore.</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

export default PrivacyPolicy;
