/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import Modal from '../src/components/Modal';
import Button from '../src/components/Button';

export default {
  title: 'Modal',
  component: Modal
};

export const Main = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Button type="button" onClick={() => setShow(true)} text="Open Modal" />
      <Modal show={show} onClick={() => setShow(false)}>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </Modal>
    </div>
  );
};

export const WithHeader = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Button type="button" onClick={() => setShow(true)} text="Open Modal" />
      <Modal show={show} onClick={() => setShow(false)} withHeader>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis
        commodo odio aenean sed. Scelerisque mauris pellentesque pulvinar
        pellentesque habitant morbi tristique. Semper risus in hendrerit
        gravida. Lorem ipsum dolor sit amet consectetur adipiscing elit ut
        aliquam. Id leo in vitae turpis massa sed. Ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at augue eget. Cras fermentum odio eu
        feugiat pretium nibh. Est ante in nibh mauris cursus mattis molestie a.
        Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum.
        Facilisis gravida neque convallis a cras semper auctor neque. Enim
        blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.
        Tempor id eu nisl nunc mi ipsum faucibus vitae.
        <br />
        <br />
        Tincidunt augue interdum velit euismod. Arcu cursus euismod quis viverra
        nibh cras. Malesuada fames ac turpis egestas integer eget aliquet.
        Tristique risus nec feugiat in fermentum posuere urna. Interdum velit
        laoreet id donec ultrices tincidunt arcu non. Tortor at risus viverra
        adipiscing at in. Ullamcorper a lacus vestibulum sed arcu. Cras ornare
        arcu dui vivamus arcu. Nec nam aliquam sem et tortor consequat id porta
        nibh. Ornare quam viverra orci sagittis eu. Dignissim sodales ut eu sem
        integer. Commodo ullamcorper a lacus vestibulum sed arcu non odio
        euismod. Mauris pharetra et ultrices neque ornare aenean euismod.
        <br />
        <br />
        Auctor urna nunc id cursus metus. Odio aenean sed adipiscing diam donec
        adipiscing tristique risus nec. Vestibulum lectus mauris ultrices eros
        in cursus turpis massa. Duis ultricies lacus sed turpis tincidunt id
        aliquet risus feugiat. Tellus cras adipiscing enim eu turpis egestas
        pretium. Aliquet enim tortor at auctor urna nunc. Elit ullamcorper
        dignissim cras tincidunt. Scelerisque fermentum dui faucibus in. Mauris
        sit amet massa vitae tortor condimentum. Lacus sed turpis tincidunt id.
        Sed turpis tincidunt id aliquet risus. Sem et tortor consequat id porta
        nibh venenatis cras sed. Pretium quam vulputate dignissim suspendisse in
        est ante. Sit amet porttitor eget dolor. Nisl pretium fusce id velit ut
        tortor pretium. Orci eu lobortis elementum nibh tellus molestie.
        <br />
        <br />
        Pulvinar elementum integer enim neque volutpat ac tincidunt vitae
        semper. Nam libero justo laoreet sit. Vel turpis nunc eget lorem dolor
        sed viverra ipsum nunc. Est ante in nibh mauris cursus mattis molestie a
        iaculis. Adipiscing enim eu turpis egestas pretium aenean pharetra.
        Nullam eget felis eget nunc. Et malesuada fames ac turpis egestas
        maecenas pharetra convallis posuere. Et ultrices neque ornare aenean
        euismod elementum nisi. Id volutpat lacus laoreet non curabitur gravida
        arcu. Quis auctor elit sed vulputate mi sit amet.
        <br />
        <br />
        Amet facilisis magna etiam tempor orci. Sit amet venenatis urna cursus
        eget. Bibendum ut tristique et egestas quis ipsum suspendisse. Quis
        ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
        Pellentesque eu tincidunt tortor aliquam nulla facilisi. Et odio
        pellentesque diam volutpat commodo sed egestas egestas fringilla. Nisl
        nisi scelerisque eu ultrices vitae. Scelerisque felis imperdiet proin
        fermentum leo vel orci porta non. Facilisis sed odio morbi quis commodo.
        Curabitur vitae nunc sed velit dignissim sodales ut. Nisi quis eleifend
        quam adipiscing vitae proin.
        <br />
        <br />
        Adipiscing tristique risus nec feugiat. Arcu dictum varius duis at
        consectetur lorem donec massa. Ut porttitor leo a diam sollicitudin
        tempor. Porta nibh venenatis cras sed felis eget velit aliquet. Purus
        semper eget duis at tellus at. Sed id semper risus in hendrerit gravida
        rutrum quisque. Adipiscing at in tellus integer feugiat. Morbi tincidunt
        augue interdum velit euismod in pellentesque massa placerat. Semper
        auctor neque vitae tempus quam. Vehicula ipsum a arcu cursus vitae
        congue mauris rhoncus. Neque volutpat ac tincidunt vitae semper. Felis
        eget velit aliquet sagittis id consectetur purus. A condimentum vitae
        sapien pellentesque habitant morbi. Senectus et netus et malesuada
        fames. Etiam non quam lacus suspendisse faucibus interdum posuere.
        Aliquet nibh praesent tristique magna sit amet purus gravida. Lorem
        ipsum dolor sit amet. Velit scelerisque in dictum non consectetur. Mi in
        nulla posuere sollicitudin aliquam ultrices sagittis. Gravida arcu ac
        tortor dignissim convallis.
        <br />
        <br />
        Cursus mattis molestie a iaculis at erat. Nisl suscipit adipiscing
        bibendum est ultricies. Tellus mauris a diam maecenas sed. Pellentesque
        habitant morbi tristique senectus et netus. Tincidunt dui ut ornare
        lectus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
        dignissim. Odio pellentesque diam volutpat commodo sed egestas egestas.
        Urna nec tincidunt praesent semper feugiat nibh sed. Etiam dignissim
        diam quis enim lobortis scelerisque. Ultrices neque ornare aenean
        euismod elementum nisi. Tortor consequat id porta nibh venenatis cras
        sed felis eget. Pulvinar proin gravida hendrerit lectus. Odio aenean sed
        adipiscing diam donec. Sodales ut eu sem integer vitae justo eget magna.
        Ac auctor augue mauris augue neque gravida in. Adipiscing elit ut
        aliquam purus sit. Est ultricies integer quis auctor elit sed.
        <br />
        <br />
        Donec enim diam vulputate ut pharetra sit amet aliquam id. Lorem mollis
        aliquam ut porttitor leo a diam. Pharetra convallis posuere morbi leo
        urna. Amet consectetur adipiscing elit duis tristique. Venenatis tellus
        in metus vulputate eu scelerisque felis. Et netus et malesuada fames ac.
        Ut diam quam nulla porttitor massa. Netus et malesuada fames ac turpis
        egestas maecenas. Accumsan lacus vel facilisis volutpat. Euismod quis
        viverra nibh cras. Aliquet eget sit amet tellus cras. Sit amet commodo
        nulla facilisi nullam vehicula ipsum a arcu.
        <br />
        <br />
        Tellus pellentesque eu tincidunt tortor aliquam nulla. Nibh nisl
        condimentum id venenatis a condimentum vitae sapien pellentesque.
        Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada
        bibendum. Egestas sed tempus urna et pharetra pharetra massa massa.
        Purus in massa tempor nec. Neque egestas congue quisque egestas. Porta
        non pulvinar neque laoreet suspendisse interdum consectetur libero. Est
        velit egestas dui id ornare arcu odio ut sem. Enim blandit volutpat
        maecenas volutpat blandit aliquam etiam erat. Nibh praesent tristique
        magna sit amet purus gravida. Varius vel pharetra vel turpis. Neque
        ornare aenean euismod elementum nisi quis eleifend quam adipiscing. At
        ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus
        sed viverra tellus in. Tristique et egestas quis ipsum. Mi sit amet
        mauris commodo quis imperdiet. Blandit turpis cursus in hac habitasse
        platea. Lectus mauris ultrices eros in cursus turpis massa tincidunt.
        <br />
        <br />
        Aliquam etiam erat velit scelerisque in dictum non. Lorem mollis aliquam
        ut porttitor leo a diam sollicitudin. Integer malesuada nunc vel risus
        commodo viverra maecenas accumsan lacus. Egestas sed sed risus pretium
        quam vulputate. Id donec ultrices tincidunt arcu non. Adipiscing
        bibendum est ultricies integer quis auctor elit sed vulputate. Tellus
        molestie nunc non blandit massa enim nec. Tellus integer feugiat
        scelerisque varius morbi enim nunc faucibus. Id semper risus in
        hendrerit gravida. Enim ut sem viverra aliquet. Viverra adipiscing at in
        tellus integer feugiat scelerisque varius morbi. Augue ut lectus arcu
        bibendum at.
        <br />
        <br />
        Odio ut sem nulla pharetra diam sit amet. Urna porttitor rhoncus dolor
        purus non enim praesent elementum facilisis. Nisl suscipit adipiscing
        bibendum est ultricies integer quis. Aenean euismod elementum nisi quis
        eleifend quam adipiscing. Viverra justo nec ultrices dui. Fermentum odio
        eu feugiat pretium nibh ipsum consequat nisl. Id cursus metus aliquam
        eleifend mi. Ipsum a arcu cursus vitae congue. Tempus quam pellentesque
        nec nam aliquam sem. Netus et malesuada fames ac turpis egestas sed.
        Nunc congue nisi vitae suscipit. Semper risus in hendrerit gravida
        rutrum. Tortor consequat id porta nibh venenatis cras sed felis.
        <br />
        <br />
        Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis
        vitae et leo duis ut diam. Sed tempus urna et pharetra pharetra massa
        massa ultricies. Sit amet est placerat in egestas erat. Sed augue lacus
        viverra vitae congue eu. Suspendisse faucibus interdum posuere lorem
        ipsum dolor. Augue interdum velit euismod in pellentesque massa. Urna
        neque viverra justo nec ultrices dui. Felis bibendum ut tristique et
        egestas quis ipsum. Sit amet purus gravida quis. Dictum sit amet justo
        donec enim diam vulputate ut pharetra. Netus et malesuada fames ac
        turpis egestas maecenas. Arcu dui vivamus arcu felis bibendum ut
        tristique. In eu mi bibendum neque egestas congue. Enim lobortis
        scelerisque fermentum dui faucibus in ornare quam. Consequat nisl vel
        pretium lectus quam id leo in. Ornare quam viverra orci sagittis.
        <br />
        <br />
        Laoreet sit amet cursus sit amet. Dolor magna eget est lorem ipsum dolor
        sit. Sit amet tellus cras adipiscing enim eu turpis. Fermentum iaculis
        eu non diam phasellus. Massa sed elementum tempus egestas sed sed risus
        pretium quam. Egestas pretium aenean pharetra magna ac. Ac orci
        phasellus egestas tellus rutrum. Dignissim diam quis enim lobortis
        scelerisque fermentum dui faucibus in. Vulputate dignissim suspendisse
        in est ante in nibh mauris. Sit amet nisl purus in mollis nunc. Sagittis
        purus sit amet volutpat. Odio facilisis mauris sit amet massa vitae
        tortor. Diam sollicitudin tempor id eu nisl nunc. Elit scelerisque
        mauris pellentesque pulvinar pellentesque habitant. Id neque aliquam
        vestibulum morbi blandit cursus risus at. Tellus elementum sagittis
        vitae et leo duis ut diam. Fringilla ut morbi tincidunt augue interdum
        velit euismod in pellentesque. Facilisi nullam vehicula ipsum a arcu
        cursus vitae congue. Porttitor lacus luctus accumsan tortor posuere ac
        ut consequat semper.
        <br />
        <br />
        Aliquam faucibus purus in massa tempor nec feugiat. Quisque id diam vel
        quam elementum pulvinar. Nullam non nisi est sit amet facilisis. Quis
        ipsum suspendisse ultrices gravida dictum fusce ut. Turpis egestas sed
        tempus urna et pharetra. Nunc sed id semper risus. Sit amet venenatis
        urna cursus eget nunc scelerisque viverra. Est ultricies integer quis
        auctor elit sed vulputate mi sit. Diam sollicitudin tempor id eu nisl
        nunc. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh.
        Tortor consequat id porta nibh venenatis cras sed felis. Amet cursus sit
        amet dictum sit amet justo. Vel quam elementum pulvinar etiam. Nec
        feugiat in fermentum posuere. Diam quis enim lobortis scelerisque
        fermentum dui faucibus. Venenatis cras sed felis eget. Ullamcorper velit
        sed ullamcorper morbi tincidunt ornare massa eget. Eu feugiat pretium
        nibh ipsum. Non diam phasellus vestibulum lorem sed risus ultricies
        tristique nulla. Cras ornare arcu dui vivamus arcu felis bibendum.
        <br />
        <br />
        Massa massa ultricies mi quis hendrerit. Habitant morbi tristique
        senectus et netus et malesuada fames ac. Posuere ac ut consequat semper.
        Vel risus commodo viverra maecenas accumsan. Adipiscing tristique risus
        nec feugiat in fermentum posuere urna. Egestas fringilla phasellus
        faucibus scelerisque. Vel quam elementum pulvinar etiam non quam lacus.
        In fermentum posuere urna nec tincidunt praesent semper. Feugiat nisl
        pretium fusce id velit ut tortor pretium. In massa tempor nec feugiat
        nisl pretium. Euismod quis viverra nibh cras.
        <br />
        <br />
        Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Proin
        libero nunc consequat interdum varius. Cursus eget nunc scelerisque
        viverra mauris in aliquam. Ut etiam sit amet nisl purus. Mauris cursus
        mattis molestie a iaculis at erat pellentesque adipiscing. Nisi
        scelerisque eu ultrices vitae auctor eu. Pellentesque habitant morbi
        tristique senectus et netus et. Mauris pellentesque pulvinar
        pellentesque habitant morbi tristique senectus et. Gravida rutrum
        quisque non tellus orci ac auctor. Turpis egestas integer eget aliquet
        nibh praesent. Et tortor at risus viverra adipiscing at in tellus. Sit
        amet consectetur adipiscing elit duis tristique sollicitudin. Fusce id
        velit ut tortor pretium viverra.
        <br />
        <br />
        Mollis aliquam ut porttitor leo a. Id leo in vitae turpis massa. Nunc
        sed velit dignissim sodales. Morbi tincidunt augue interdum velit
        euismod in pellentesque massa. Id cursus metus aliquam eleifend. Dis
        parturient montes nascetur ridiculus mus. Aliquam etiam erat velit
        scelerisque in. Dui accumsan sit amet nulla facilisi morbi. Mi sit amet
        mauris commodo quis imperdiet massa tincidunt. Eget sit amet tellus
        cras. Venenatis cras sed felis eget velit aliquet sagittis. Egestas erat
        imperdiet sed euismod nisi porta lorem mollis aliquam. Curabitur vitae
        nunc sed velit dignissim sodales. Egestas maecenas pharetra convallis
        posuere morbi leo. Urna condimentum mattis pellentesque id nibh tortor
        id aliquet lectus.
        <br />
        <br />
        Feugiat vivamus at augue eget. Ut ornare lectus sit amet est placerat
        in. Viverra maecenas accumsan lacus vel facilisis. Felis bibendum ut
        tristique et egestas. Libero volutpat sed cras ornare arcu dui vivamus
        arcu. Augue mauris augue neque gravida in fermentum. Fermentum leo vel
        orci porta non pulvinar neque laoreet. Est velit egestas dui id ornare.
        Varius quam quisque id diam. Elit ut aliquam purus sit amet luctus.
        Lectus proin nibh nisl condimentum id venenatis a. Ligula ullamcorper
        malesuada proin libero nunc consequat interdum. Feugiat nibh sed
        pulvinar proin gravida hendrerit lectus. Odio eu feugiat pretium nibh
        ipsum consequat nisl.
        <br />
        <br />
        At tempor commodo ullamcorper a lacus vestibulum sed arcu non.
        Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.
        Venenatis cras sed felis eget velit aliquet sagittis id consectetur.
        Scelerisque eleifend donec pretium vulputate sapien nec sagittis
        aliquam. Eu non diam phasellus vestibulum lorem sed risus ultricies
        tristique. Volutpat est velit egestas dui id ornare arcu. Orci porta non
        pulvinar neque laoreet suspendisse interdum. Enim facilisis gravida
        neque convallis. Amet purus gravida quis blandit turpis cursus. Faucibus
        turpis in eu mi bibendum neque egestas congue quisque. Facilisi cras
        fermentum odio eu feugiat. Ultrices tincidunt arcu non sodales neque
        sodales ut etiam sit. In eu mi bibendum neque egestas. Cursus mattis
        molestie a iaculis at erat pellentesque adipiscing commodo. Egestas
        tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
        Vitae suscipit tellus mauris a. Ultrices eros in cursus turpis massa
        tincidunt dui ut ornare. Elementum nisi quis eleifend quam adipiscing
        vitae proin. Tristique risus nec feugiat in fermentum posuere urna.
        <br />
        <br />
        At risus viverra adipiscing at in tellus integer. Elementum integer enim
        neque volutpat ac tincidunt vitae semper quis. Nulla facilisi cras
        fermentum odio eu. Diam maecenas ultricies mi eget mauris pharetra et
        ultrices. Posuere sollicitudin aliquam ultrices sagittis orci a
        scelerisque. Nisl tincidunt eget nullam non. Enim praesent elementum
        facilisis leo vel fringilla est ullamcorper eget. Aenean pharetra magna
        ac placerat vestibulum lectus mauris. Arcu bibendum at varius vel.
        Pellentesque diam volutpat commodo sed egestas egestas fringilla
        phasellus. Et malesuada fames ac turpis egestas maecenas pharetra
        convallis. Mauris pharetra et ultrices neque ornare aenean euismod.
        Sagittis eu volutpat odio facilisis mauris sit amet massa. Ultrices dui
        sapien eget mi proin.
      </Modal>
    </div>
  );
};
