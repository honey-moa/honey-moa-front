import { BlockNoteSchema, defaultBlockSpecs, locales } from '@blocknote/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { video, audio, file, codeBlock, ...remainingBlockSpecs } =
  defaultBlockSpecs;
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { EditorProps } from './type';
import useLocalStorage from '@/hook/useLocalStorage';
import { AttachmentsQueries } from '@/apis/attachment';
import { toast } from 'react-toastify';

export const lightTheme = {
  colors: {
    editor: {
      text: '#212121',
      background: '#FFFFFF',
    },
    menu: {
      text: '#757575',
      background: '#FFFFFF',
    },
    tooltip: {
      text: '#FFFFFF',
      background: '#212121',
    },
    hovered: {
      text: '#FF5722',
      background: '#FF7043',
    },
    selected: {
      text: '#FFFFFF',
      background: '#FFB300',
    },
    disabled: {
      text: '#B0B0B0',
      background: '#E5E3C3',
    },
    shadow: '#B0B0B0',
    border: '#E5E3C3',
    sideMenu: '#757575',
    highlights: {
      gray: {
        text: '#757575',
        background: '#f3f4f6',
      },
      // 다른 색상들 추가 가능
    },
  },
} as const;

export const darkTheme = {
  colors: {
    editor: {
      text: '#FFFFFF',
      background: '#212121',
    },
    menu: {
      text: '#FFFFFF',
      background: '#1E1E1E',
    },
    tooltip: {
      text: '#FFFFFF',
      background: '#424242',
    },
    hovered: {
      text: '#FFB300',
      background: '#FF9800',
    },
    selected: {
      text: '#FFFFFF',
      background: '#FFB300',
    },
    disabled: {
      text: '#FFFFFF',
      background: '#424242',
    },
    shadow: '#000000',
    border: '#424242',
    sideMenu: '#757575',
    highlights: {
      gray: {
        text: '#FFFFFF',
        background: '#2C2C2C',
      },
      // 다른 색상들 추가 가능
    },
  },
} as const;

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...remainingBlockSpecs,
  },
});

const locale = locales['ko'];

export const Editor = ({ setContents }: EditorProps) => {
  const { value: theme } = useLocalStorage('theme');

  const attachmentsMutation = AttachmentsQueries.useNewAttachmentMutation();

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('files', file);
    formData.append('uploadType', 'IMAGE');
    const response = attachmentsMutation.mutateAsync(
      { formData },
      {
        onSuccess: () => {
          toast.success('파일 업로드 성공');
        },
      }
    );

    return response;
  };

  const editor = useCreateBlockNote({
    schema,
    dictionary: {
      ...locale,
    },
    uploadFile,
  });
  const onChangeBlockNoteHandler = () => {
    setContents(prev => {
      return {
        ...prev,
        contents: editor.document,
      };
    });
  };

  return (
    <>
      <BlockNoteView
        editor={editor}
        onChange={onChangeBlockNoteHandler}
        theme={theme === 'dark' ? darkTheme : lightTheme}
      />
    </>
  );
};
