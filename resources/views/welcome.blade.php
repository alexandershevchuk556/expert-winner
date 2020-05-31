@extends('layouts.app')
@section('content')
<div class="content pl-5 ">
    @foreach ($users as $user)
    <div class="user mx-auto pt-2" style="width: 200px">
        <div class="user-title row">
            <div class="user-title-photo">
                <img src="{{ $user->profile->profileImage() }}" class="rounded-circle w-50" style="max-width: 50px">
            </div>
            <div class="user-title-name">
                <a href="/profile/{{ $user->id }}" class="text-dark"> {{ $user->username }} </a>
            </div>
        </div>
       
    </div>
    @endforeach 
    
        <div class="fixed-bottom mx-auto" style="width: 200px;">{{ $users->links() }}</div>
    
</div>
@endsection