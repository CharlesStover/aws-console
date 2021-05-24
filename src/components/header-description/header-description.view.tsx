import Link from '@awsui/components-react/link';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';

export default function HeaderDescription(): ReactElement {
  return (
    <I18n
      name={
        <Link
          fontSize="body-s"
          href="https://charlesstover.com/"
          target="_blank"
        >
          Charles Stover
        </Link>
      }
    >
      an unofficial AWS console by $name
    </I18n>
  );
}
