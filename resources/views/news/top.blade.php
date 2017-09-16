@extends('layouts.app')

@section('content')
  <router-view api="{{ $api }}"></router-view>
@endsection
