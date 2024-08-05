import React from 'react';
import Modal from 'react-responsive-modal';
import { MutatingDots } from 'react-loader-spinner';

function Loading() {
  return (
    <Modal
      open
      center
      onClose={() => {}}
      showCloseIcon={false}
      classNames={{ modal: '!rounded-full !no-padding !bg-transparent !shadow-none' }}
    >
      <MutatingDots
        width="90"
        height="90"
        radius="10"
        color="#5E9942"
        secondaryColor="#EF2D56"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{ background: 'white', display: 'inline-flex', borderRadius: '100%' }}
        visible
      />
    </Modal>
  );
}

export default Loading;
