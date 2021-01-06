import React, { useContext, useEffect, useState } from 'react';
import {
  AdminDashboardCardContainer,
  AdminDashboardContainer,
  DisplayCards,
  UserIcon,
  DataCard,
  IconContainer,
  AdminIcon,
  PaymentIcon,
  VideoIcon,
  UserDetails,
} from './AdminDashboard.style';
import { NavContainer } from '../Header/Header.style';
import NavMenu from '../NavMenu/NavMenu';
import Table from '../Tables/Table';
import { tableContext } from '../../Context/TableContext';
import useWindowSize from '../../utils/useWindowSize';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';
import Select from 'react-select';
import Spinner from '../Spinner/Spinner';

const paymentOptions = [
  { value: 'PAID', label: 'PAID' },
  { value: 'NOT PAID', label: 'NOT PAID' },
  { value: 'NOT APPLICABLE', label: 'NOT APPLICABLE' },
];
const userStageOptions = [
  { value: 'PAYMENT_STAGE', label: 'PAYMENT STAGE' },
  { value: 'ACCOUNT_REVIEW_STAGE', label: 'ACCOUNT REVIEW STAGE' },
  { value: 'THIRD_STAGE', label: 'THIRD STAGE' },
  { value: 'FOURTH_STAGE', label: 'FOURTH STAGE' },
  { value: 'FINAL_STAGE', label: 'FINAL STAGE' },
  { value: 'NOT_APPLICABLE', label: 'NOT APPLICABLE' },
];

// ENUM(
//           'PAYMENT_STAGE',
//           'ACCOUNT_REVIEW_STAGE',
//           'THIRD_STAGE',
//           'FOURTH_STAGE',
//           'FINAL_STAGE',
//           'NOT_APPLICABLE',
//         ),
const AdminDashboard = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const [counts, setCounts] = useState({
    admin: 0,
    user: 0,
    payment: 0,
  });
  const {
    tableData: { rows, count },
    adminData: { rows: adminRows, adminCount, paymentCount, userCount },
    loading,
    selectedOption,
    setSelectedOption,
    handleChange,
    displayUser,
    modal: modalData,
    setModal,
    updateRecord,
  } = useContext(tableContext);
  const [paymentOption, setPaymentOption] = useState(null);
  const [currentStage, setCurrentStage] = useState(null);
  useEffect(() => {
    if (!loading) {
      setCounts({
        ...counts,
        admin: adminCount,
        user: userCount,
        payment: paymentCount,
      });
    }
  }, [loading]);
  useEffect(() => {
    if (modalData.open) {
      setPaymentOption({
        value: modalData.data.payment_status,
        label: modalData.data.payment_status,
      });
      setCurrentStage({
        label: modalData.data.current_stage.replace(/_/gi, ' '),
        value: modalData.data.current_stage,
      });
    }
  }, [modalData.open]);

  const changePaymentHandler = (selectedOption) => {
    switch (selectedOption.value) {
      case 'PAID':
        setCurrentStage({
          value: 'ACCOUNT_REVIEW_STAGE',
          label: 'ACCOUNT REVIEW STAGE',
        });
        break;
      case 'NOT PAID':
        setCurrentStage({ value: 'PAYMENT_STAGE', label: 'PAYMENT STAGE' });
        break;
      case 'NOT APPLICABLE':
        setCurrentStage({ value: 'NOT_APPLICABLE', label: 'NOT APPLICABLE' });
        break;

      default:
        break;
    }
    setPaymentOption(selectedOption);
  };
  const changeStageHandler = (selectedOption) => {
    setCurrentStage(selectedOption);
  };

  return (
    <>
      <NavContainer>
        <NavMenu />
      </NavContainer>
      <AdminDashboardContainer>
        <AdminDashboardCardContainer>
          <DisplayCards>
            <IconContainer color='red'>
              <UserIcon />
            </IconContainer>
            <DataCard>
              <label>Users</label>
              <span>{counts.user}</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color='#108ee9'>
              <AdminIcon />
            </IconContainer>
            <DataCard>
              <label>Admin</label>
              <span>{counts.admin}</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color='#00a65a'>
              <PaymentIcon />
            </IconContainer>
            <DataCard>
              <label>Payments</label>
              <span>{counts.payment}</span>
            </DataCard>
          </DisplayCards>
          <DisplayCards>
            <IconContainer color='#e0751e'>
              <VideoIcon />
            </IconContainer>
            <DataCard>
              <label>Video uploads</label>
              <span>2</span>
            </DataCard>
          </DisplayCards>
        </AdminDashboardCardContainer>
        <Filter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          handleChange={handleChange}
        />
        <Table
          columnCount={5}
          tableData={{ rows, count }}
          displayUser={displayUser}
        />
        <Modal open={modalData.open}>
          <UserDetails>
            <button
              onClick={() => {
                setModal({ open: false, data: {} });
                setPaymentOption(null);
                setCurrentStage(null);
              }}
              disabled={loading}
            >
              close
            </button>
            <div>
              <span>First Name: </span>
              <span>{modalData.data.firstname}</span>
            </div>
            <div>
              <span>Last Name:</span>
              <span>{modalData.data.lastname}</span>
            </div>
            <div>
              <span>Change Payment:</span>
              {/* <span>{modalData.data.payment_status}</span> */}
              <Select
                onChange={changePaymentHandler}
                value={paymentOption}
                options={paymentOptions}
              />
              <button
                onClick={() => {
                  return updateRecord({
                    current_stage: currentStage.value,
                    payment_status: paymentOption.value,
                    id: modalData.data.id,
                  });
                }}
                disabled={loading}
              >
                {loading ? <Spinner /> : 'change'}
              </button>
            </div>
            <div>
              <span>Change stage</span>
              <Select
                onChange={changeStageHandler}
                value={currentStage}
                options={userStageOptions}
              />
              <button
                onClick={() => {
                  return updateRecord({
                    current_stage: currentStage.value,
                    id: modalData.data.id,
                  });
                }}
                disabled={loading}
              >
                {loading ? <Spinner /> : 'change'}
              </button>
            </div>
            <div>
              <span>Email:</span>
              <span>{modalData.data.email}</span>
            </div>
            <div>
              <span>Phone:</span>
              <span>{modalData.data.phone}</span>
            </div>
            <div>
              <span>Age:</span>
              <span>{modalData.data.age}</span>
            </div>
            <div>
              <span>ID:</span>
              <span>{modalData.data.id}</span>
            </div>
          </UserDetails>
        </Modal>
      </AdminDashboardContainer>
    </>
  );
};

const memoized = React.memo(AdminDashboard);

export default memoized;
