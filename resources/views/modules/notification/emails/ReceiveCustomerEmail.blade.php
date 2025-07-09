{{--@component('mail::message')--}}
{{--    {{$message}}--}}
{{--@endcomponent--}}
<div class="p-16">
    <p>Sender Name: {{$name}}</p>
    <p>Company: {{$company}}</p>
    <p>Sender Email: {{$from}}</p>
    <p>Mobile: {{$mobile}}</p>
    <p>Industry: {{$industry}}</p>
    <br />
    <p>{{$message}}</p>
</div>
