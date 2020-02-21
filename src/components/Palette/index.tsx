import React from 'react';
import './Palette.less';
import { Span } from '../Span';
import { Hr } from '../Hr';

export const Palette = () => (
  <div className="Palette">
    <div className="Palette-colors">
      <div className="Palette-color Palette-color--base">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            Base
          </Span>
          <Span className="Palette-html">#242424</Span>
          <Span className="Palette-rgb">36, 36, 36</Span>
        </div>
      </div>
      <div className="Palette-color Palette-color--background">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            Background
          </Span>
          <Span className="Palette-html">#fffefa</Span>
          <Span className="Palette-rgb">255, 254, 250</Span>
        </div>
      </div>
      <div className="Palette-color Palette-color--accent">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            Accent
          </Span>
          <Span className="Palette-html">#666666</Span>
          <Span className="Palette-rgb">102, 102, 102</Span>
        </div>
      </div>
      <div className="Palette-color Palette-color--success">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            Success
          </Span>
          <Span className="Palette-html">#a1f0e8</Span>
          <Span className="Palette-rgb">161, 240, 232</Span>
        </div>
      </div>
      <div className="Palette-color Palette-color--alert">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            Alert
          </Span>
          <Span className="Palette-html">#ffe970</Span>
          <Span className="Palette-rgb">235, 133, 112</Span>
        </div>
      </div>
      <div className="Palette-color Palette-color--error">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            Error
          </Span>
          <Span className="Palette-html">#ff7070</Span>
          <Span className="Palette-rgb">255, 112, 112</Span>
        </div>
      </div>
      <div className="Palette-color Palette-color--disabled">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            Disabled
          </Span>
          <Span className="Palette-html">#f7f7f7</Span>
          <Span className="Palette-rgb">247, 247, 247</Span>
        </div>
      </div>
      <div className="Palette-color Palette-color--?">
        <div className="Palette-sample" />
        <div className="Palette-description">
          <Span className="Palette-title" bold>
            ?
          </Span>
          <Span className="Palette-html">#??????</Span>
          <Span className="Palette-rgb">?, ?, ?</Span>
        </div>
      </div>
    </div>
    <Hr />
    <div className="Palette-grid">
      <div className="Palette-item Palette-item--base" />
      <div className="Palette-item Palette-item--background" />
      <div className="Palette-item Palette-item--accent" />
      <div className="Palette-item Palette-item--success" />
      <div className="Palette-item Palette-item--alert" />
      <div className="Palette-item Palette-item--error" />
      <div className="Palette-item Palette-item--disabled" />
    </div>
    <Hr />
    <div className="Palette-grid">
      <div className="Palette-item Palette-item--blue-0" />
      <div className="Palette-item Palette-item--blue-1" />
      <div className="Palette-item Palette-item--blue-2" />
      <div className="Palette-item Palette-item--blue-3" />
      <div className="Palette-item Palette-item--blue-4" />
      <div className="Palette-item Palette-item--blue-5" />
      <div className="Palette-item" />
      <div className="Palette-item Palette-item--red-0" />
      <div className="Palette-item Palette-item--red-1" />
      <div className="Palette-item Palette-item--red-2" />
      <div className="Palette-item Palette-item--red-3" />
      <div className="Palette-item Palette-item--red-4" />
      <div className="Palette-item Palette-item--red-5" />
      <div className="Palette-item" />
      <div className="Palette-item Palette-item--yellow-0" />
      <div className="Palette-item Palette-item--yellow-1" />
      <div className="Palette-item Palette-item--yellow-2" />
      <div className="Palette-item Palette-item--yellow-3" />
      <div className="Palette-item Palette-item--yellow-4" />
      <div className="Palette-item Palette-item--yellow-5" />
      <div className="Palette-item" />
      <div className="Palette-item Palette-item--black-0" />
      <div className="Palette-item Palette-item--black-1" />
      <div className="Palette-item Palette-item--black-2" />
      <div className="Palette-item Palette-item--black-3" />
      <div className="Palette-item Palette-item--black-4" />
      <div className="Palette-item Palette-item--black-5" />
      <div className="Palette-item" />
      <div className="Palette-item Palette-item--black-transparent-1" />
      <div className="Palette-item Palette-item--black-transparent-2" />
      <div className="Palette-item Palette-item--black-transparent-3" />
      <div className="Palette-item Palette-item--black-transparent-4" />
      <div className="Palette-item Palette-item--black-transparent-5" />
      <div className="Palette-item" />
    </div>
  </div>
);
