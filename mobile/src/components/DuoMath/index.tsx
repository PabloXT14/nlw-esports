import React from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../themes';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMath({ discord, onClose, ...rest }: Props) {
  return (
    <Modal
      transparent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons 
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <Text style={styles.discord}>
            {discord}
          </Text>
        </View>
      </View>
    </Modal>
  );
}