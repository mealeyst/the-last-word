import React, { Fragment, useState, MouseEventHandler } from 'react';
import { Link } from '../01_atoms/Link'
import { MobileNavigation } from './MobileNavigation';

export default {
  title: 'Organisms/MobileNavigation',
  component: MobileNavigation,
  argTypes: { onClick: { action: 'Toggled Menu' } },
};

type ArgTypes = {
  closed: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Template = (args: ArgTypes) => {
  const [closed, setClosed] = useState(args.closed)
  const clickHandler = (event: any) => {
    setClosed(!closed)
    args.onClick(event)
  }
  return(
    <Fragment>
      <MobileNavigation closed={closed} clickHandler={clickHandler}>
        <Link href="#" light={false}>Home</Link>
        <Link href="#" light={false}>Menus</Link>
        <Link href="#" light={false}>Gallery</Link>
        <Link href="#" light={false}>Press</Link>
        <Link href="#" light={false}>Contact</Link>
      </MobileNavigation>
      <section style={{padding: '0 3rem'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat odio ex, vel mollis ipsum porttitor sit amet. Nulla dignissim felis at nisi sodales sodales. Cras sed sem a est tincidunt tincidunt. Vivamus mi nunc, malesuada quis ullamcorper ut, volutpat quis est. Maecenas viverra viverra nisl, eu ullamcorper quam varius ut. Proin laoreet vestibulum purus, id hendrerit dui pharetra sit amet. Morbi ornare laoreet est, et dapibus turpis cursus eu. Mauris et leo eu turpis luctus commodo. In sapien dolor, lobortis eget tortor sit amet, ornare eleifend lacus. Pellentesque quis condimentum magna. Donec euismod egestas justo, non luctus dolor dapibus eu. Praesent id gravida dui. Maecenas aliquet justo sed suscipit dapibus. Cras rhoncus libero pretium, rutrum sem eu, accumsan dui.</p>
        <p>Donec sit amet pulvinar lectus. Duis cursus, tortor vel dapibus feugiat, nisi leo condimentum lacus, non mattis tortor nisi sed ipsum. Proin sit amet fermentum risus. Quisque mollis, enim nec semper placerat, elit dolor convallis risus, eget tincidunt quam est quis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor nunc, cursus id tellus eu, tempus mattis massa. Vestibulum quis justo fringilla, vestibulum neque a, ornare libero. Nullam sit amet porttitor velit. Vivamus quis enim ipsum. Donec feugiat, mauris ut tempor placerat, sapien mi commodo quam, ac cursus ligula metus dignissim nulla. Curabitur sit amet sapien interdum massa tincidunt fermentum nec a felis. Morbi ipsum eros, tincidunt vitae imperdiet sit amet, accumsan ut lectus. Quisque porta laoreet augue, sit amet volutpat lectus aliquet id. Etiam nec consectetur ex, volutpat faucibus enim.</p>
        <p>Curabitur lacinia non orci quis consequat. Nulla commodo ut eros non vehicula. Proin ac pretium eros. Nunc vitae lobortis mauris. Nulla suscipit augue ut sollicitudin ullamcorper. Mauris iaculis sapien at nunc dapibus, fermentum sollicitudin tortor ultricies. Nunc eget congue leo. Vestibulum venenatis justo nec nunc malesuada accumsan at a velit. Cras et massa quis augue pretium ultrices. Vivamus quis dapibus elit. Nulla viverra viverra sodales. Nulla facilisi. Suspendisse dictum ex in molestie accumsan.</p>
        <p>Donec vitae porttitor libero. Aliquam condimentum diam nec justo rutrum consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet semper ligula. Vestibulum ullamcorper leo at blandit imperdiet. Sed viverra turpis orci, eu commodo ligula gravida nec. Praesent pharetra orci in interdum finibus. Sed cursus massa at nisl ultrices, ac eleifend magna mattis. Morbi eget mauris commodo, sagittis purus in, tempor dui. Sed ut consequat ex. Sed euismod tincidunt risus non efficitur. Donec id massa gravida, molestie nibh sed, lobortis nisi. Proin ut sapien laoreet, facilisis velit ac, gravida magna. In mollis, diam eget semper ullamcorper, nunc est varius erat, sit amet facilisis nisi purus at odio.</p>
        <p>Fusce cursus est a massa placerat, sit amet pellentesque turpis molestie. Donec id aliquet purus, vel aliquam ipsum. Donec semper, nisi eu ultricies blandit, orci ipsum mollis lacus, vitae vestibulum mauris turpis venenatis velit. Morbi varius eros ac nisi vestibulum, vel lobortis mauris mattis. Etiam nec arcu sed felis sodales imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In urna diam, dictum nec magna nec, imperdiet rhoncus arcu. Praesent sed tristique erat, non convallis risus. Sed volutpat diam turpis, eu consectetur ante ullamcorper ac. Cras ut odio sollicitudin, pretium erat eget, blandit turpis. Aenean sed est eu ex facilisis rhoncus a sed ex. Praesent sed neque vel magna ultricies ultrices.</p>
      </section>
    </Fragment>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  closed: true
};