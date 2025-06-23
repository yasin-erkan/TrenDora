import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { height, width } from '../../utils/constants';
import { CustomModalProps } from '../../models/ui/customModalProps';
import colors from '../../theme/colors';

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  onConfirm,
  title,
  icon,
  description,
  buttonText,
  cancelButtonText,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalDescription}>{description}</Text>

          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.primaryButton]}
              onPress={onConfirm || onClose}
            >
              <Text style={styles.textStyle}>{buttonText || 'OK'}</Text>
            </Pressable>
            {cancelButtonText && (
          <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={onClose}
          >
                <Text style={styles.cancelTextStyle}>{cancelButtonText}</Text>
          </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: width * 0.8,
    minHeight: height * 0.4,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: colors.PRIMARY,
  },
  cancelButton: {
    backgroundColor: colors.RED,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  cancelTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  modalDescription: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
    color: colors.BLACK,
    fontWeight: '500',
  },
  iconContainer: {
    marginBottom: 20,
  },
});

export default CustomModal;
