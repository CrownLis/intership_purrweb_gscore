import React, { useState, useRef, useEffect, PropsWithChildren, FC } from 'react';
import styled from 'styled-components';

import Down from '@/assets/images/Down.svg';
import Up from '@/assets/images/Up.svg';

type DropdownProps = PropsWithChildren<{
  items: {
    key: React.Key;
    label: React.ReactNode;
  }[];
}>;

const Dropdown: FC<DropdownProps> = ({ children, items }) => {
  const container = useRef<HTMLDivElement>(null);
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e: MouseEvent) => {
    if (!container || !container.current) {
      return;
    }
    if (container.current && !container.current.contains(e.target as Node)) {
      setDropdownState({ open: false });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={container}>
      <DropdownTrigger type="button" onClick={handleDropdownClick}>
        {children}
        {dropdownState.open ? <Up /> : <Down />}
      </DropdownTrigger>
      {dropdownState.open && (
        <DropdownContainer>
          <DropdownItemList>
            {items.map((item) => (
              <DropdownItem key={item.key} onClick={() => setDropdownState({ open: false })}>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownItemList>
        </DropdownContainer>
      )}
    </div>
  );
};

export default Dropdown;

const DropdownTrigger = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 10;
  gap: 34px;
  background-color: ${(props) => props.theme.color.color700};
  border-radius: 12px;
  padding: 29px 52px 29px 24px;
`;

const DropdownItemList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const DropdownItem = styled.li`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
